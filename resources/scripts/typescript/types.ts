// Type Declarations
type website = {
  name: string;
  url: string;
  category: string;
  subcategory?: string;
  image?: string;
  imageType?: 'png' | 'svg' | 'jpeg' | 'webp';
}

type autoComplete = {
  phrase: string;
}