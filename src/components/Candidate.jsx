import React from 'react'


const Candidates = ({image, name, description, last_update, categories }) => {

    return (
        <div className="candidates__card" >
        <img src={image} alt={name} className="candidates__card__image"/>
        <div className="candidates__card__title__wrapper">
          <span className="candidates__thumbs-indicator">
            <i className="far fa-thumbs-up"></i>
          </span>
          <h2 className="candidates__card__title">
            {name}
          </h2>
        </div>           
         <h3 className="candidates__card__description">
          {description}
        </h3>
        <div className="candidates__card__divisor">
          <button className="candidates__card__viewReport-button">
            View Full Report
          </button>
          <h4 className="candidates__card__date">
            {last_update}<br/> in {categories}
          </h4>
        </div>
        <div className="candidates__graphic-report">
          <div className="candidates__graphic-report__thumbs-up">
            <i className="far fa-thumbs-up"></i>
            64%
          </div>
          <div className="candidates__graphic-report__thumbs-down">
            <i className="far fa-thumbs-down"></i>
            36%
          </div>
        </div>
      </div>
    );

}

export default Candidates;