export type ProductItem = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
};

export type QueryParams = {
  sortBy: string;
  title?: string;
};
