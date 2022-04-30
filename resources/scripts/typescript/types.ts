// sites.json Items
type website = {
  name: string;
  url: string;
  category: string;
  subcategory?: string;
  image?: string;
  imageType?: 'png' | 'svg' | 'jpeg' | 'webp';
}

type dropdown = {
  dropdown: true;
  name: string;
  category: string;
  subcategory?: string;
  sites: dropdownWebsite[];
}

type dropdownWebsite = {
  name: string;
  url: string;
  menu: string;
  image?: string;
  imageType?: 'png' | 'svg' | 'jpeg' | 'webp';
}


// Events
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


// Misc
type autoComplete = {
  phrase: string;
}