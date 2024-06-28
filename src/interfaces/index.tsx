export interface IMainCard {
  cardBackground: string,
  imageSrc: string,
  imageAlt?: string,
  imageTitle?: string,
  subtitleP: string,
  subtitlePColor?: string,
  boldSubtitleP: string,
  boldSubtitlePColor?: string,
  mainP: string,
  mainPColor: string,
  whiteButton?: boolean,
  bigCard?: boolean,
  whiteButtonTextColor?: string,
  customImageStyles?: string,
  customImageWidth?: string
}

export interface ISectionCard {
  backgroundColor: string,
  backgroundBlurColor: string,
  imageUrl: string,
  imageAlt?: string,
  imageTitle?: string,
  firstColumnSubtitleUp: string
  firstColumnSubtitleDown: string,
  firstColumnMainWordUp: string,
  firstColumnMainWordDown: string,
  secondColumnSubtitleUp: string
  secondColumnSubtitleDown: string,
  secondColumnTitle: string
}

export interface IProductCard {
  imageUrl: string,
  imageAlt?: string,
  imageTitle?: string,
  productName: string,
  productPrice: string,
  coin?: string
}