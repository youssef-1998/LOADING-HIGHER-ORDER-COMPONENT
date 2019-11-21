import React from 'react'
import './SpinnerStyle.css';

const SpinnerComponents = (props) => {
    return (

        <div className="spin  d-flex justify-content-center text-info text-center m-5" >
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>

    )
}

export default SpinnerComponents