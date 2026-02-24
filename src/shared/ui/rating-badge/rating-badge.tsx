import {
  MdChildCare,
  MdSupervisedUserCircle,
  MdWarning,
  MdExplicit,
  MdLock,
} from "react-icons/md";
import styles from "./rating-badge.module.scss";
import { CSSProperties } from "react";
import { RatingBadgeConfig } from "./rating-badge.types";

const RATING_CONFIG: RatingBadgeConfig = {
  "G - All Ages": {
    icon: MdChildCare,
    color: "#4caf50",
    label: "Free",
  },
  "PG - Children": {
    icon: MdChildCare,
    color: "#8bc34a",
    label: "Children",
  },
  "PG-13 - Teens 13 or older": {
    icon: MdSupervisedUserCircle,
    color: "#ff9800",
    label: "13+",
  },
  "R - 17+ (violence & profanity)": {
    icon: MdWarning,
    color: "#f44336",
    label: "17+",
  },
  "R+ - Mild Nudity": {
    icon: MdExplicit,
    color: "#e91e63",
    label: "17+ (Nudity)",
  },
  "Rx - Hentai": {
    icon: MdLock,
    color: "#000000",
    label: "18+",
  },
};

interface RatingBadgeProps {
  ratingString: string;
}

export function RatingBadge({ ratingString }: RatingBadgeProps) {
  const config = RATING_CONFIG[ratingString] || {
    icon: MdWarning,
    color: "#9e9e9e",
    label: "N/A",
  };

  const Icon = config.icon;
  const badgeStyle = {
    "--badgeColor": config.color,
  };
  return (
    <div
      style={badgeStyle as CSSProperties}
      className={styles.ratingBadge}
      title={ratingString}
    >
      <Icon size={16} />
      <span>{config.label}</span>
    </div>
  );
}
