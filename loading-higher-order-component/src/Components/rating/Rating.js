import React from 'react';
import './RatingStyle.css';

const Rating = props => {
    
    let arrStars = []
    for(let i =0 ; i<5; i++){
        if(props.rating > i){
            arrStars.push(<span onClick={() => props.ratingStars(i+1)}>★</span>)
        }else{
            arrStars.push(<span onClick={() => props.ratingStars(i+1)}>☆</span>)
        }
    }
    return (

        <div className="favoris">
            {arrStars}
        </div>

    )
}

export default Rating