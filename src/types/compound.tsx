export type Compound = {
  id: number;
  compound: string;
  section: string;
  currency: null;
  valuations: {
    [key: string]: any;
    name: string;
    nameAr: string | null;
    propertyType: string;
    avgPrice: number;
    avgSize: number;
  }[];
};
