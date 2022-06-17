import { kidQuery } from './kids/Query.js';
import { organizationQuery } from './organizations/Query.js';

export const Query = { ...kidQuery, ...organizationQuery };
