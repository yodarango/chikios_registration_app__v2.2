import { Kid } from '../../../db/schemas/kid.js';

export const kidMutation = {
   kid: async (parent, args, ctx, info) => {
      const newKid = new Kid({
         ...args.data,
         checked_in: false,
         created: new Date(),
         registration: {
            checked_in_at: new Date(),
            checked_out_by: null,
            checked_out_at: null,
         },
         metadata: {
            organization: 'ALJC',
         },
      });
      try {
         const kid = await newKid.save();
         return kid;
      } catch (error) {
         console.log(error);
         return `the following error ocurred ${error}`;
      }
   },
   check_in: async (parent, args, ctx, info) => {
      try {
         const kid = await findOne({ _id: args.ID });
         kid.registration.hecked_in = true;
         kid.registration.checked_in_at = new Date();
         kid.registration.checked_out_by = null;
         kid.registration.checked_out_at = null;

         await kid.save();
         return kid;
      } catch (error) {
         console.log(error);
         return `the following error ocurred ${error}`;
      }
   },
   check_out: async (parent, args, ctx, info) => {
      try {
         const kid = await findOne({ _id: args.ID });

         kid.registration.hecked_in = true;
         kid.registration.checked_in_at = null;
         kid.registration.checked_out_by = args.checked_out_by;
         kid.registration.checked_out_at = new Date();

         await kid.save();
         return kid;
      } catch (error) {
         console.log(error);
         return `the following error ocurred ${error}`;
      }
   },
};
