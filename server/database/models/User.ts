import mongoose, { Schema } from 'mongoose'

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
    enum: ['buyer', 'driver', 'admin'], 
    default: 'buyer' 
  },
  
  // Driver Specific Metrics (Defaults to inactive for buyers)
  isAvailable: { 
    type: Boolean, 
    default: false 
  },
  
  // Fully Validated GeoJSON Block
  currentLocation: {
    type: { 
      type: String, 
      enum: ['Point'], // Enforces strict GeoJSON compliance
      default: 'Point',
      required: true
    },
    coordinates: { 
      type: [Number], 
      default: [-114.2846, 48.2231], // Default regional fallback coordinates (longitude first!)
      required: true
    }
  }
}, { 
  timestamps: true 
})

userSchema.index({ 'currentLocation.coordinates': '2dsphere' })

export default mongoose.models.User || mongoose.model('User', userSchema)