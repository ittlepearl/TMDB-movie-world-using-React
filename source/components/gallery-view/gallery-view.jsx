import React, { Component } from 'react'
import GalleryMenu from './gallery-menu.jsx'
import GalleryGrid from './gallery-grid.jsx'
import { Button } from 'semantic-ui-react'
import axios from 'axios'
const api_key = "?api_key=26071ee64143ad3375d51e06d4264282"
const img_base_url = "http://image.tmdb.org/t/p/w185/";

class GalleryView extends Component{
  constructor(props){
    super(props);
    this.state = {
      moviesAfterMapped: [],
      movies: null
    };

    this.getByGenre = this.getByGenre.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.mapMovies = this.mapMovies.bind(this);
    this.getByGenre(28);
  }

  getByGenre(genre){
    if(!genre){
      return
    }
    let search_url = `https://api.themoviedb.org/3/discover/movie${api_key}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}`;
    console.log(search_url)
    axios.get(search_url)
      .then(response => {
        this.setState({movies: response.data.results})
        this.mapMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  setGenre(name){
    const genreID ={ "Action":28,"Animation":16,"Comedy":35,"Documentary":99,
    "Fantasy":14, "Music":10402,"Romance":10749,"Science Fiction":878,"Drama":18}
    console.log(name,genreID[name]);
    this.getByGenre(genreID[name]);
  }

  mapMovies(movies){
    if(movies == null){
      return;
    }
    let mapped = movies.map((elem) => {
      return {"path":elem.poster_path,"idx":movies.indexOf(elem),"name":elem.title,
    "overview":elem.overview,"release_date":elem.release_date,"vote":elem.vote_average, "popularity":elem.popularity}
    })
    this.setState({moviesAfterMapped: mapped});
  }

  render(){
  return(
    <div>
      <h3/> 
      <GalleryMenu setGenreChange = {(name) => this.setGenre(name)}/>
      <GalleryGrid moviesAfterMapped = {this.state.moviesAfterMapped}/>
    </div>
  );
  }
}

export default GalleryView
