import { kidMutation } from './kids/Mutation.js';
import { organizationMutation } from './organizations/Mutation.js';

export const Mutation = { ...kidMutation, ...organizationMutation };
