export interface CustomSlickProps {
  title?: string;
  button?: CustomSlickButton;
  infinite?: boolean;
  slideToShow?: number;
  slideToScroll?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  // images: File[];
}

interface CustomSlickButton {
  text: string;
  onClick: () => void;
}
