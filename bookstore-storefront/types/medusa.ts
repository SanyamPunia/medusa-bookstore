import { Product as MedusaProduct, ProductVariant } from '@medusajs/medusa';

export type Variant = Omit<ProductVariant, 'beforeInsert'>;

export interface Product extends Omit<MedusaProduct, 'variants'> {
  variants: Variant[];
}
