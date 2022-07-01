import { Injectable } from '@angular/core';
import { Actor, moviesInterface } from '../Actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private actors:Array<Actor> = [
    new Actor('Will Smith', [
      {
        title: 'Bad Boys',
        year: 1995,
        director: 'Michael Bay',
        genres: 'Action, Comedy, Crime',
        posters: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Bad_Boys.jpg/220px-Bad_Boys.jpg'
      },
      {
        title: 'Bad Boys 2',
        year: 2003,
        director: 'Michael Bay',
        genres: 'Action, Comedy, Crime',
        posters: 'https://image.tmdb.org/t/p/original/y8GogshY1Pgzm3yEJ2ECngucgds.jpg'
      },
      {
        title: 'Bad Boys For Life',
        year: 2020,
        director: 'Michael Bay',
        genres: 'Action, Comedy, Crime',
        posters: 'https://m.media-amazon.com/images/M/MV5BMzBkYTlkM2YtNWU1Yi00NWIzLWE5M2EtMTFjZTc2MzgxNzNjXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'
      },
      {
        title: 'I Robot',
        year: 2004,
        director: 'Alex Proyas',
        genres: 'Science Fiction',
        posters: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Movie_poster_i_robot.jpg/220px-Movie_poster_i_robot.jpg'
      }
    ]),
    new Actor('Anthony Hopkins', [
      {
        title: 'The Father',
        year: 2020,
        director: 'Florian Zeller',
        genres: 'Drama',
        posters: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8bc5d0079e83b7b3fe7f3f0423818556d0b3c7f61913942e00f6e37c873d3eda._RI_V_TTW_.jpg'
      },
      {
        title: 'transformers the last knight',
        year: 2017,
        director: 'Michael Bay',
        genres: 'Science Fiction, Action',
        posters: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2782b18e87596328a5ca31e29209d2d08e4f70ec12a6cf28265a47afcd830c60._RI_V_TTW_.jpg'
      },
      {
        title: 'Thor Ragnarok',
        year: 2017,
        director: 'Taika Waititi',
        genres: 'Science Fiction, Action, Adventure',
        posters: 'https://m.media-amazon.com/images/I/81LHuCYlgEL._AC_SY679_.jpg'
      },
      {
        title: 'Hannibal',
        year: 2001,
        director: 'Ridley Scott',
        genres: 'Drama, Action, Terror',
        posters: 'https://m.media-amazon.com/images/M/MV5BZDMxMjhiZmItNWMxMC00NzYyLWJiOTYtNGYwOTAyYjU5OWY4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
      }
    ]),
    new Actor('Keanu Reeves', [
      {
        title: 'John Wick',
        year: 2014,
        director: 'Chad Stahelski',
        genres: 'Action',
        posters: 'https://images.justwatch.com/poster/147599059/s718/john-wick-otro-dia-para-matar.%7Bformat%7D'
      },
      {
        title: 'John Wick: Chapter 2',
        year: 2014,
        director: 'Chad Stahelski',
        genres: 'Action',
        posters: 'https://m.media-amazon.com/images/I/81u1G1WDZ4L._SL1500_.jpg'
      },
      {
        title: 'John Wick 3: Parabellum',
        year: 2019,
        director: 'Chad Stahelski',
        genres: 'Action',
        posters: 'https://m.media-amazon.com/images/I/61WP-bWFz9L._SY445_.jpg'
      },
      {
        title: 'Constantine',
        year: 2005,
        director: 'Francis Lawrence',
        genres: 'Action',
        posters: 'https://es.web.img2.acsta.net/pictures/14/03/04/10/29/213847.jpg'
      }
    ]),
    new Actor('Scarlett Johansson', [
      {
        title: 'Lucy',
        year: 2014,
        director: 'Luc Besson',
        genres: 'Science Fiction',
        posters: 'https://i.pinimg.com/564x/d4/b8/58/d4b858660c1312747f4e40ba219cde0e.jpg'
      },
      {
        title: 'Black Widow',
        year: 2021,
        director: 'Cate Shortland',
        genres: 'Action',
        posters: 'https://images-na.ssl-images-amazon.com/images/I/914MHuDfMSL.jpg'
      },
      {
        title: 'Jojo Rabbit',
        year: 2019,
        director: 'Taika Waititi',
        genres: 'Comedy',
        posters: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/67473F1D7B13FBA47810762F3C31F7BF3BD83537A63639E14283C6B3EE1CEF84/scale?width=1200&aspectRatio=1.78&format=jpeg'
      },
      {
        title: 'Rough Night',
        year: 2017,
        director: 'Lucia Aniello',
        genres: 'Comedy',
        posters: 'https://i.ido.bi/assets/review/2017/06/Rough-Night-Feature-Image.jpg'
      }
    ]),
    new Actor('Seth Rogen', [
      {
        title: 'This is the End',
        year: 2013,
        director: 'Evan Goldberg, Seth Rogen',
        genres: 'Comedy',
        posters: 'https://m.media-amazon.com/images/M/MV5BMTQxODE3NjM1Ml5BMl5BanBnXkFtZTcwMzkzNjc4OA@@._V1_.jpg'
      },
      {
        title: 'Pineapple Express',
        year: 2008,
        director: 'David Gordon Green',
        genres: 'Action, Comedy, Crime',
        posters: 'https://th.bing.com/th/id/OIP.PfeZZnxmmb1lw4X3T6L94wHaLH?pid=ImgDet&rs=1'
      },
      {
        title: 'Paul',
        year: 2011,
        director: 'Greg Mottola',
        genres: 'Comedy',
        posters: 'https://m.media-amazon.com/images/I/91JZOJSxJqL._AC_SL1500_.jpg'
      },
      {
        title: 'Neighbors',
        year: 2014,
        director: 'Nicholas Stoller',
        genres: 'Comedy',
        posters: 'https://upload.wikimedia.org/wikipedia/en/3/32/Neighbors_%282013%29_Poster.jpg'
      }
    ]),
  ]

  searchActors(search:string):Array<moviesInterface>{
    let movies:Array<moviesInterface> = [];
    search = search.replace( /(<([^>]+)>)/ig, '');

    for (const actor of this.actors ) {
      if(actor.name.toLocaleLowerCase() === search.toLocaleLowerCase()){
        movies = actor.movies;
      }
    }

    return movies;
  }

  getActors():Array<Actor>{
    return this.actors;
  }
  
  constructor() { }
}
