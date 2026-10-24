import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  customerName: { type: String, required: true },
  service: { type: String, required: true },
  provider: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, required: true, enum: ["Requested", "Confirmed", "Completed", "Cancelled"] }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Appointment', schema);
