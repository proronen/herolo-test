import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../config/store';
import Movie from './movie';
import NewMovie from './new_movie';
import { apikey } from '../../config/constants';

class Movies extends Component {

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey="+apikey+"&type=movie&s=return&page=1")
        .then(res => res.json())
        .then(data => {
            if(data.Search){

                // The items has an "imdbID" on them, 
                // but i want to system generated id's, this will be good for new entries as well. 
                
                data.Search.map((item, i) => {
                    return item.id = i;
                })

                // on initial load we will dispatch the movies to our store
                
                store.dispatch({
                    type: 'moviesList',
                    payload: {
                        ...data
                    }
                });
            }
        });
    }

    render() {
       
        const { movies } = store.getState();

        return (
            <React.Fragment>
                
                <NewMovie />
                
                <div id="movies_cont">
                    {
                        movies && movies.Search ? movies.Search.map( (data, i) => {
                        return  ( <Movie movieData={data} key={i} /> )
                        }) : <img src="loading.png" alt=""/>
                    }
                </div>
            </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Movies);