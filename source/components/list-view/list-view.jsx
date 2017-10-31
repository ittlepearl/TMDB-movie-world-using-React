import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import styles from './list-view.scss'

import axios from 'axios'

import ListContainer from './list-container.jsx'
import ListSelectionAll from './list-selection-all.jsx'

const api_key = "?api_key=26071ee64143ad3375d51e06d4264282"
const search_base_url = "https://api.themoviedb.org/3/search/movie"

class ListView extends Component {

  constructor() {
      super();
      this.state = {
      };
      this.data = [];
      this.tryHttpCon = this.tryHttpCon.bind(this);
      this.voteSort = this.voteSort.bind(this);
      this.popularitySort = this.popularitySort.bind(this);
      this.orderChange = this.orderChange.bind(this);
      this.sortPropertyChange = this.sortPropertyChange.bind(this);
      this.ascending = false;
      this.sortProperty = '';

    }

    tryHttpCon(keyword){
      if(!keyword){
        console.log("empty");
        this.data = [];
        this.setState()
      }
      let search_url = `https://api.themoviedb.org/3/search/movie${api_key}&query=${keyword}&page=1`;
      console.log(search_url)
      axios.get(search_url)
        .then(response => {
          this.data = response.data.results;
          if(this.sortProperty == 'Vote'){
            this.data.sort(this.voteSort);
          }
          else if(this.sortProperty == 'Popularity'){
            this.data.sort(this.popularitySort);
          }
          this.setState();
        })
        .catch(error => {
          console.log(error);
        });
    }

    orderChange(event, data){
      if(data.value == 'ascending'){
        this.ascending = true;
        console.log(this.ascending);
      }
      else{
        this.ascending = false;
        console.log(this.ascending);
      }

      console.log(this.data);
      if(this.sortProperty == 'Vote'){
        this.data.sort(this.voteSort);
      }
      else if(this.sortProperty == 'Popularity'){
        this.data.sort(this.popularitySort);
      }
      console.log(this.data);
      this.setState();
    }

    sortPropertyChange(event, data){
        this.sortProperty = data.value;
        console.log(this.sortProperty);
        console.log(this.data);
        if(this.sortProperty == 'Vote'){
          this.data.sort(this.voteSort);
        }
        else if(this.sortProperty == 'Popularity'){
          this.data.sort(this.popularitySort);
        }
        console.log(this.data);
        this.setState();
    }

    voteSort(v1,v2){
      if(this.ascending){
        if(v1.vote_average < v2.vote_average){
          return -1;
        }else if(v1.vote_average > v2.vote_average){
          return 1;
        }else{
          return 0;
        }
      }
      else {
        if(v1.vote_average < v2.vote_average){
          return 1;
        }else if(v1.vote_average > v2.vote_average){
          return -1;
        }else{
          return 0;
        }
      }
    }

    popularitySort(v1,v2){
      if(this.ascending){
        if(v1.popularity < v2.popularity){
          return -1;
        }else if(v1.popularity > v2.popularity){
          return 1;
        }else{
          return 0;
        }
      }
      else {
        if(v1.popularity < v2.popularity){
          return 1;
        }else if(v1.popularity > v2.popularity){
          return -1;
        }else{
          return 0;
        }
      }
    }

    render() {
        return(
            <div className="ListView">
                <h3/>
                <ListSelectionAll conFunc = {keyword => this.tryHttpCon(keyword)}
                 orderChange ={(event,data) => this.orderChange(event, data)}
                 sortPropertyChange ={(event,data) => this.sortPropertyChange(event, data)} />
                <ListContainer searchData = {this.data}/>
            </div>
        )
    }
}

export default ListView
