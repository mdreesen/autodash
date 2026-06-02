import { d as defineEventHandler, r as readBody, c as createError } from '../../../nitro/nitro.mjs';
import mongoose, { Schema } from 'mongoose';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'iron-session';

const partsOrderSchema = new Schema({
  // 1. Relational Actors
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
    // Null until a nearby driver explicitly accepts the gig
    index: true
  },
  // 2. Target Vehicle Spec Data
  vehicle: {
    year: { type: Number, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true }
  },
  // 3. Commercial Supplier Parameters
  supplier: {
    storeName: {
      type: String,
      required: true,
      enum: ["O'Reilly Auto Parts", "NAPA Auto Parts", "AutoZone", "Advance Auto Parts", "Independent"]
    },
    storeAddress: { type: String, required: true },
    commercialOrderNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true
    }
  },
  // 4. Manifest Inventory Payload
  manifestText: {
    type: String,
    required: true
  },
  // Line-by-line item details or memo entries
  // 5. Geolocation Routing Specifications
  deliveryLocation: {
    address: { type: String, required: true },
    bayInstructions: { type: String, default: "" },
    // GeoJSON Point format for distance mapping calculations
    geoPoint: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number],
        // [longitude, latitude]
        required: true
      }
    }
  },
  // 6. Workflow Lifecycle States
  status: {
    type: String,
    required: true,
    enum: ["placed", "accepted", "picking-up", "in-transit", "delivered", "cancelled"],
    default: "placed",
    index: true
  },
  // 7. Financial Ledger Bookkeeping
  pricing: {
    deliveryFee: { type: Number, required: true },
    // Total amount charged to the buyer
    driverPayout: { type: Number, required: true },
    // The driver's cut (e.g., 85% of delivery fee)
    platformCut: { type: Number, required: true }
    // Your transaction commission fee (e.g., 15%)
  },
  // 8. Order Tracking Timestamps
  acceptedAt: { type: Date, default: null },
  pickedUpAt: { type: Date, default: null },
  deliveredAt: { type: Date, default: null }
}, {
  timestamps: true
  // Auto-manages createdAt and updatedAt properties
});
partsOrderSchema.index({ "deliveryLocation.geoPoint": "2dsphere" });
const PartsOrderImport = mongoose.models.PartsOrder || mongoose.model("PartsOrder", partsOrderSchema);

const PartsOrder = PartsOrderImport;
const create_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = event.context.user;
  if (!(user == null ? void 0 : user._id)) {
    throw createError({
      statusCode: 401,
      message: "Authentication trace missing. Please log in to request couriers."
    });
  }
  const {
    year,
    make,
    model,
    storeName,
    storeAddress,
    commercialOrderNumber,
    manifestText,
    deliveryAddress,
    bayInstructions,
    lng,
    lat
  } = body;
  if (!year || !make || !model || !storeAddress || !commercialOrderNumber || !manifestText || !deliveryAddress) {
    throw createError({
      statusCode: 400,
      message: "All core logistical fields must be completed to initialize dispatch vectors."
    });
  }
  try {
    const baseDeliveryFee = 14.5;
    const driverCutPercentage = 0.85;
    const driverPayout = Number((baseDeliveryFee * driverCutPercentage).toFixed(2));
    const platformCut = Number((baseDeliveryFee - driverPayout).toFixed(2));
    const targetLongitude = lng ? Number(lng) : -114.2846;
    const targetLatitude = lat ? Number(lat) : 48.2231;
    const newOrder = await PartsOrder.create({
      buyerId: user._id,
      // Tracks the authenticated buyer
      driverId: null,
      vehicle: {
        year: Number(year),
        make,
        model
      },
      supplier: {
        storeName,
        storeAddress,
        commercialOrderNumber: commercialOrderNumber.toUpperCase().trim()
      },
      manifestText,
      deliveryLocation: {
        address: deliveryAddress,
        bayInstructions: bayInstructions || "",
        geoPoint: {
          type: "Point",
          coordinates: [targetLongitude, targetLatitude]
        }
      },
      status: "placed",
      pricing: {
        deliveryFee: baseDeliveryFee,
        driverPayout,
        platformCut
      }
    });
    return {
      success: true,
      message: "Logistics manifest generated. Order broadcasted to active regional drivers.",
      orderId: newOrder._id,
      pricingDetails: newOrder.pricing
    };
  } catch (error) {
    console.error("Parts order creation lifecycle aborted:", error);
    throw createError({
      statusCode: 500,
      message: error.message || "Failed to process delivery request manifest."
    });
  }
});

export { create_post as default };
//# sourceMappingURL=create.post.mjs.map
