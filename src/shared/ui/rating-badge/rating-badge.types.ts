export interface RatingBadgeProps {
  ratingString: string;
}

type RatingBadgeConfigProps = {
  icon: React.ElementType;
  color: string;
  label: string;
}


export type RatingBadgeConfig = Record<string, RatingBadgeConfigProps>