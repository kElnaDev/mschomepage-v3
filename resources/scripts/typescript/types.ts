// Type Declarations
type website = {
  name: string;
  url: string;
  category: string;
  subcategory?: string;
  image?: string;
  imageType?: 'png' | 'svg' | 'jpeg' | 'webp';
}

type event = {
  name: string;
  start: string;
  end: string;
  imageType?: 'png' | 'svg' | 'jpeg' | 'webp';
}

type eventDate = {
  start: Date;
  end: Date;
  id: string;
}

type time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type autoComplete = {
  phrase: string;
}