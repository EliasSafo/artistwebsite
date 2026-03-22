export interface Release {
  id?: string;
  _id?: string;
  title: string;
  type: 'album' | 'single' | 'ep';
  releaseDate: string;
  coverArt: string;
  streamingLinks: {
    spotify?: string;
    apple?: string;
    youtube?: string;
  };
  tracklist?: string[];
  slug?: string; // Added for CMS integration
}

export interface TourDate {
  id?: string;
  _id?: string;
  date: string;
  city: string;
  venue: string;
  country: string;
  ticketLink?: string; // legacy
  ticketUrl?: string; // Sanity
  mapUrl?: string;
  soldOut?: boolean;
}

export interface SanityImageObject {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface MerchItem {
  id?: string;
  _id?: string;
  name: string;
  price: number;
  image: string | SanityImageObject;
  sizes?: string[];
  category: 'apparel' | 'accessories' | 'music';
}

export interface CartItem extends MerchItem {
  quantity: number;
  selectedSize?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}
