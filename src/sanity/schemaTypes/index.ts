import { type SchemaTypeDefinition } from 'sanity';

import foods from './Foods';
import chefs from './Chefs';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs],
};