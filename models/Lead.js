import mongoose from 'mongoose';

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    trim: true,
    lowercase: true,
  },
  storeUrl: {
    type: String,
    required: [true, 'Please provide your Shopify store URL'],
    trim: true,
  },
  monthlyRevenue: {
    type: String,
    required: [true, 'Please select your monthly revenue'],
    enum: {
      values: ['under_50k', '50k_100k', 'over_100k'],
      message: '{VALUE} is not a valid revenue range',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
