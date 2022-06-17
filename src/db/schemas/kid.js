import mongoose from 'mongoose';
const { Schema } = mongoose;

const KidSchema = new Schema({
   first_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   last_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   guardian_first_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   guardian_last_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   guardian_phone_number: {
      type: Number,
      required: true,
      maxLength: 12,
   },
   second_guardian_first_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   second_guardian_last_name: {
      type: String,
      required: true,
      maxLength: 140,
   },
   age: {
      type: Number,
      requird: true,
   },
   photo: {
      type: String,
      required: true,
   },
   created: {
      type: Date,
      default: new Date(),
      required: true,
   },
   registration: {
      checked_in: {
         type: Boolean,
         required: false,
      },
      checked_in_at: {
         type: Date,
         required: false,
      },
      checked_out_by: {
         type: String,
         required: false,
      },
      checked_out_at: {
         type: Date,
         required: false,
      },
   },
   metadata: {
      organization: {
         type: String,
         required: true,
      },
   },
});

export const Kid = mongoose.model('Kid', KidSchema);
