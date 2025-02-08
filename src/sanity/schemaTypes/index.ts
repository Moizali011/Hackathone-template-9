import { type SchemaTypeDefinition } from 'sanity';
import Chefs from './Chefs';
import Foods from './Foods';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Foods, Chefs],
};