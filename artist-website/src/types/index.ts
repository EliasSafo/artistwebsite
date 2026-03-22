export interface Release {
  id: string;
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
  id: string;
  date: string;
  city: string;
  venue: string;
  country: string;
  ticketLink?: string;
  soldOut?: boolean;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  image: string;
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
