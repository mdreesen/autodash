/**
 * AUTODASH COURIER ON-DEMAND PARTS ORDER SCHEMA
 * SAFE COMPILATION PATTERN // GEOSPATIAL SEARCH READY
 */
import mongoose, { Schema } from 'mongoose'

const partsOrderSchema = new Schema({
  // 1. Relational Actors
  buyerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  driverId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null, // Null until a nearby driver explicitly accepts the gig
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
      required: true // Just require a string, remove the strict enum array!
    },
    storeAddress: { type: String, required: true },
    commercialOrderNumber: { type: String, required: true }
  },

  // 4. Manifest Inventory Payload
  manifestText: { 
    type: String, 
    required: true 
  }, // Line-by-line item details or memo entries

  // 5. Geolocation Routing Specifications
  deliveryLocation: {
    address: { type: String, required: true },
    bayInstructions: { type: String, default: '' },
    // GeoJSON Point format for distance mapping calculations
    geoPoint: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true
      }
    }
  },

  // 6. Workflow Lifecycle States
  status: {
    type: String,
    required: true,
    enum: ['placed', 'accepted', 'picking-up', 'in-transit', 'delivered', 'cancelled'],
    default: 'placed',
    index: true
  },

  // 7. Financial Ledger Bookkeeping
  pricing: {
    deliveryFee: { type: Number, required: true },  // Total amount charged to the buyer
    driverPayout: { type: Number, required: true }, // The driver's cut (e.g., 85% of delivery fee)
    platformCut: { type: Number, required: true }   // Your transaction commission fee (e.g., 15%)
  },

  // 8. Order Tracking Timestamps
  acceptedAt: { type: Date, default: null },
  pickedUpAt: { type: Date, default: null },
  deliveredAt: { type: Date, default: null }
}, { 
  timestamps: true // Auto-manages createdAt and updatedAt properties
})

// CRITICAL INDEXING: 2dsphere index enables spatial queries (like finding distance from store to garage)
partsOrderSchema.index({ 'deliveryLocation.geoPoint': '2dsphere' })

export default mongoose.models.PartsOrder || mongoose.model('PartsOrder', partsOrderSchema)