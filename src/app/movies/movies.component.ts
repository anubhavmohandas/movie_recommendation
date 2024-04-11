import { Component } from '@angular/core';
import { movie } from './movie';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: movie[] = [
    {
      name: "Baazigar",
      year: 1993,
      genere: ['Crime', 'Drama', 'Musical']
    },
    {
      name: "Dilwale Dulhania Le Jayenge",
      year: 1995,
      genere: ['Romance', 'Drama', 'Musical']
    },
    {
      name: "Kuch Kuch Hota Hai",
      year: 1998,
      genere: ['Romance', 'Comedy', 'Drama']
    },
    {
      name: "Lagaan",
      year: 2001,
      genere: ['Drama', 'Musical', 'Sport']
    },
    {
      name: "Dhoom",
      year: 2004,
      genere: ['Action', 'Thriller', 'Crime']
    },
    {
      name: "3 Idiots",
      year: 2009,
      genere: ['Comedy', 'Drama']
    },
    {
      name: "Chennai Express",
      year: 2013,
      genere: ['Action', 'Comedy', 'Romance']
    },
    {
      name: "Bajrangi Bhaijaan",
      year: 2015,
      genere: ['Drama', 'Comedy']
    },
    {
      name: "Dangal",
      year: 2016,
      genere: ['Biography', 'Drama', 'Sport']
    },
    {
      name: "Gully Boy",
      year: 2019,
      genere: ['Drama', 'Music']
    },
    {
      name: "Andhadhun",
      year: 2018,
      genere: ['Crime', 'Thriller', 'Comedy']
    },
    {
      name: "PK",
      year: 2014,
      genere: ['Comedy', 'Drama', 'Fantasy']
    },
    {
      name: "Queen",
      year: 2013,
      genere: ['Comedy', 'Drama']
    },
    {
      name: "Om Shanti Om",
      year: 2007,
      genere: ['Action', 'Comedy', 'Drama']
    },
    {
      name: "Padmaavat",
      year: 2018,
      genere: ['Drama', 'History']
    },
    {
      name: "Kabhi Khushi Kabhie Gham",
      year: 2001,
      genere: ['Drama', 'Romance']
    },
    {
      name: "Jab We Met",
      year: 2007,
      genere: ['Comedy', 'Drama', 'Romance']
    },
    {
      name: "Barfi!",
      year: 2012,
      genere: ['Comedy', 'Drama', 'Romance']
    },
    {
      name: "Taare Zameen Par",
      year: 2007,
      genere: ['Drama', 'Family']
    },
    {
      name: "Swades",
      year: 2004,
      genere: ['Drama']
    }
  ];
  genres: string[] = [];

  selectedGenre: string = '';

  constructor() {
    this.movies.forEach(movie => {
      movie.genere.forEach(genre => {
        if (!this.genres.includes(genre)) {
          this.genres.push(genre);
        }
      });
    });
  }

  get filteredMovies(): movie[] {
    if (!this.selectedGenre) {
      return this.movies;
    } else {
      return this.movies.filter(movie => movie.genere.includes(this.selectedGenre));
    }
  }
}
