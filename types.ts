export interface EventDetail {
  title: string;
  date: string;
  lunarDate: string;
  time: string;
  locationName: string;
  address: string;
  mapLink?: string;
  type: 'groom' | 'bride' | 'party';
}

export interface GalleryImage {
  url: string;
  caption?: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}
