import React from 'react'
import SpinnerComponents from '../spinner/SpinnerComponents'

const HOC = (MovieList) => {
    return props =>
    props.lod ? <SpinnerComponents />: <MovieList {...props} />

        

    
}

export default HOC