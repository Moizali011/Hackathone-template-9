import { type SchemaTypeDefinition } from 'sanity';
import chef from './Chefs';
import food from './Foods';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef],
};