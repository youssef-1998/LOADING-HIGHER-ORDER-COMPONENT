import React, { Component } from 'react';
import './App.css';

import SearchBar from './Components/search/SearchBar';
import StarFilter from './Components/star-filter/StarFilter';
import MoviesList from './Components/movies-list/MoviesList';
import SpinnerComponents from './Components/spinner/SpinnerComponents';
import HOC from './Components/hoc/HOC';

let films = [
  {
    picture: "https://image.tmdb.org/t/p/w500/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
    title: "El Camino: A Breaking Bad Movie",
    date: "2019-10-11",
    rating: 2,
  },
  {
    picture: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
    title: "John Wick: Chapter 3 - Parabellum",
    date: "2019-05-15",
    rating: 4,
  },
  {
    picture: "https://image.tmdb.org/t/p/w500/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    title: "It Chapter Two",
    date: "2019-09-04",
    rating: 5,
  },
  {
    picture: "https://image.tmdb.org/t/p/w500/pKKvCaL1TPTVtbI6EeliyND3api.jpg",
    title: "The Dark Knight",
    date: "2008-07-16",
    rating: 3,
  },
  {
    picture: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    title: "The Lord of the Rings: The Return of the King",
    date: "2003-12-01",
    rating: 5,
  },
  {
    picture: "https://image.tmdb.org/t/p/w500/qdfARIhgpgZOBh3vfNhWS4hmSo3.jpg",
    title: "Frozen II",
    date: "2019-11-20",
    rating: 4,
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: films,
      newRating: 1,
      keyword: '',
      loding: true,
    }
  }

  rateMovie = x => {
    this.setState({ newRating: x })
  }

  searchMovie = y => {
    this.setState({ 
      keyword: y
     })
    
  }

  add = () => {
    let titre = prompt('Enter your titre')
    let image = prompt('Enter your picture')
    let year = prompt('Enter the date')
    let star = prompt('Enter your rate')

    this.setState({
      list: this.state.list.concat({ title: titre, picture: image, date: year, rating: star })
    })
  }

  // setTimeout(() => {
    
  // }, timeout);
    

  render() {
    const { } = this.state;
    return (

      <div className="App">
        <div className="d-flex justify-content-between">
          <SearchBar rummage={titre => this.searchMovie(titre)} />
          <StarFilter rating={this.state.newRating} rateIt={number => this.rateMovie(number)} />
        </div>
        <MoviesList lod={this.state.loding} x={this.state.list.filter(el => el.rating >= this.state.newRating && el.title.toUpperCase().includes(this.state.keyword.toUpperCase().trim())) } />
        <button className="btn-plus" onClick={this.add}>+ add movie</button>
      </div>

    )
  }
}

export default App



