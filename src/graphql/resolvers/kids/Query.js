import { Kid } from '../../../db/schemas/kid.js';

export const kidQuery = {
   kid: async (parent, args, ctx, info) => {
      try {
         if (args.ID) {
            const kid = await Kid.findOne({ _id: args.ID });
            return kid;
         }

         const kids = await Kid.find().sort({ first_name: 1 }).limit(10).skip(args.skip);
         return kids;
      } catch (error) {
         console.log(error);
         return `the following error ocurred ${error}`;
      }
   },
};
