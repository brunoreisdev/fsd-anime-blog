type DefaultSubType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

type AiredProp = {
  from: {
    day: number;
    month: number;
    year: number;
  };
  to: {
    day: number;
    month: number;
    year: number;
  };
}

type Aired = {
  from: string;
  to: string;
  prop: AiredProp;
  string: string;
}

type Title = {
  type: string;
  title: string;
}

type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

type Image {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

type TrailerImages = Image & {
  medium_image_url: string | null;
  maximum_image_url: string | null;
}

type Trailer = {
  youtube_id: string | null;
  url: string | null;
  embed_url: string;
  images: TrailerImages;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: Image;
    webp: Image;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: DefaultSubType[];
  licensors: DefaultSubType[];
  studios: DefaultSubType[];
  genres: DefaultSubType[];
  explicit_genres: DefaultSubType[];
  themes: DefaultSubType[];
}