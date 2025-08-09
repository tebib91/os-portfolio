export interface MetaDataMapping {
  [url: string]: MetaData;
}

export interface MetaData {
  title: string;
  description: string;
  author: string;
  keywords: string;
  image: string;
  canonical: string;
}
