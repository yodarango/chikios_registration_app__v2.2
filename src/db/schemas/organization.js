import mongoose from 'mongoose';
const { Schema } = mongoose;

const organizationSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   admin_email: {
      type: String,
      required: true,
   },
   admin_password: {
      type: String,
      required: true,
   },
   admin_first_name: {
      type: String,
      required: true,
   },
   admin_last_name: {
      type: String,
      required: true,
   },
   other_users: {
      type: [String],
      required: false,
      default: [],
   },
   settings: {
      type: String,
      required: true,
   },
});

export const Organization = mongoose.model('Organization', organizationSchema);
