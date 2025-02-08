import { type SchemaTypeDefinition } from 'sanity';

import chefs from './Chefs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ chefs],
};