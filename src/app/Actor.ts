export interface moviesInterface{
  title: string,
  year: number,
  director: string,
  genres: string,
  posters: string
}

export class Actor {
  name:string;
  movies;

  constructor(
    name: string,
    movies: Array<moviesInterface>
  ) {
    this.name = name;
    this.movies = movies;
  }
}