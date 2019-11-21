import React, { Component } from 'react';
import './MoviesListStyle.css';

import MoviesCard from '../movies-card/MoviesCard';
import HOC from '../hoc/HOC';

class MoviesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const {x} = this.props;
        return (

            <div className="box-movie">
                {x.map(el => <MoviesCard movie={el} />)}
                
            </div>
            
        )
    }
}

export default HOC(MoviesList)