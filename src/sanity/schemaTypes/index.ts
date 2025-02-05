import { type SchemaTypeDefinition } from 'sanity';
import chefs from './chefs';
import foods from './Foods';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods, chefs],
};