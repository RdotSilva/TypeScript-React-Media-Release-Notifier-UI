export interface Movie {
  img: string;
  title: string;
  description: string;
  releaseDate: string;
  linkOne: string;
  linkTwo: string;
}

export const mockMovies: Movie[] = [
  {
    img: "image",
    title: "1",
    description: "Movie 1",
    releaseDate: "4/17/23",
    linkOne: "http://www.linkOne.com",
    linkTwo: "http://www.linktwo.com",
  },
];
