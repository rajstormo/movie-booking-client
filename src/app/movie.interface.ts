export interface Movie {
  _id: string;
  title: string;
  description: string;
  releasedOn: Date;
  poster: string;
  runtime: Number;
  director: string;
  writer: string;
  genre: string[];
  language: string[];
  actors: string;
  imdbRating: {
    $numberDecimal: string;
  }
}

