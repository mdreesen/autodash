import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["buyer", "driver", "admin"],
    default: "buyer"
  },
  // Driver Specific Metrics (Defaults to inactive for buyers)
  isAvailable: {
    type: Boolean,
    default: false
  },
  currentLocation: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], default: [-114.2846, 48.2231] }
    // Default region coordinates
  }
}, {
  timestamps: true
});
userSchema.index({ currentLocation: "2dsphere" });
const UserImport = mongoose.models.User || mongoose.model("User", userSchema);

export { UserImport as U };
//# sourceMappingURL=User.mjs.map
