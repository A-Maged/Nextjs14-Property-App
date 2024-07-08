export type CompoundLocation = {
  id: number;
  name: string;
  nameAr: string | null;
  marketPrice: number;
  location: {
    lat: number;
    lon: number;
  };
  district: string | null;
};
