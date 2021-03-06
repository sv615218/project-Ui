export class Item {
  id: any;
  name: string;
  price: number;
  source: string;
  image: string;
  offer: string;
  url: string; // Generated by https://quicktype.io
}
export interface Data {
  id: string | number;
  title: string;
  price: number | string;
  image: string;
  offerPrice: number | string;
  productUrl: string;
  discountPercentage?: number | string;
}
