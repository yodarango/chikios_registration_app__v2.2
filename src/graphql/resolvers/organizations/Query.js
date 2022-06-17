import { Organization } from '../../../db/schemas/organization.js';

export const organizationQuery = {
   organization: async (parent, args, ctx, info) => {
      console.log('hey');
      return;
   },
};
