export interface ICard{
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