export type ProductItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  favId: number | null;
  cartId: number | null;
};

export type QueryParams = {
  sortBy?: string;
  title?: string;
};
