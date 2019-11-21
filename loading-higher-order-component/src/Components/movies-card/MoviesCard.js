import React, { Component } from 'react';
import './MoviesCardStyle.css';

import Rating from '../rating/Rating'

class MoviesCard extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }

    }

    render() {
        const {movie} = this.props;
        return (
            
            <div className="film-card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="custom-image">
                    <img src={movie.picture} />
                </div>
                <div className="custom-card">
                    <h3>{movie.title}</h3>
                    <p>{movie.date}</p>
                    <p>{movie.votes }</p>
                    <Rating rating={movie.rating}/>
                </div>
            </div>
            
        )
    }
}

export default MoviesCard