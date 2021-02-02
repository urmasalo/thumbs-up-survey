import React, {useState} from 'react'


const Candidates = ({image, name, description, last_update, categories }) => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  let popularityPercentage = 0;
  const [vote, setVote ] = useState("");

  const changeHandler = (event) =>{
    setVote(event.target.value)
    }

  const calculatePopularity = (_likes, _dislikes) => {
    
    if (_likes === 0 && _dislikes === 0){
      return 0
    } else if (_likes > 0 && _dislikes === 0) {
      return 100
    } else if (_dislikes> 0 && _likes === 0){
      return 0
    }
    return Math.round(_likes * 100 / (_likes + _dislikes));
  
  }
  
  const submitVote = (event) => {
    event.preventDefault()
    if (vote === "yes") {
      setLikes( (prevLikes) => prevLikes + 1 )
    }else if(vote === "no") {
      setDislikes( (prevDislikes) => prevDislikes + 1)
    }

  }


  console.log("likes :" + likes, "dislikes :" + dislikes, "popularityPercentage :" + calculatePopularity(likes, dislikes)) 


    return (
        <div className="candidates__card" >
        <img src={image} alt={name} className="candidates__card__image"/>
        <div className="candidates__card__title__wrapper">
          <span className="candidates__thumbs-status">
            <i className="far fa-thumbs-up"></i>
          </span>
          <h2 className="candidates__card__title">
            {name}
          </h2>
        </div>           
          <h4 className="candidates__card__date">
            {last_update} in {categories}
          </h4>
         <h3 className="candidates__card__description">
          {description}
        </h3>
        <div className="candidates__card__divisor">
          <form className="candidates__card__form" onSubmit={submitVote}>
            <div onChange={changeHandler} className="candidates__card__form__vote">
            <input value="yes" id={`thumbs-up-${name}`} type="radio" name={`vote-${name}`} className="hide candidates__card__form__radio"></input>
            <label htmlFor={`thumbs-up-${name}`} className="candidates__thumbs-indicator candidates__thumbs-indicator__up">
              <i className="far fa-thumbs-up"></i>
            </label>

            <input value="no" id={`thumbs-down-${name}`} type="radio" name={`vote-${name}`} className="hide candidates__card__form__radio"></input>
            <label htmlFor={`thumbs-down-${name}`} className="candidates__thumbs-indicator candidates__thumbs-indicator__down">
              <i className="far fa-thumbs-down"></i>
            </label>
            </div>
            <button type="submit" className="candidates__card__view-report-button">
                Vote now
            </button>
          </form>
        </div>
        <div className="candidates__graphic-report">
          <div className="candidates__graphic-report__thumbs-up">
            <i className="far fa-thumbs-up"> </i>
            {(calculatePopularity(likes, dislikes))+ `%`}
          </div>
          <div className="candidates__graphic-report__thumbs-down">
            <i className="far fa-thumbs-down"></i>
            { ((calculatePopularity(likes, dislikes)-100)*-1)} %
          </div>
        </div>
      </div>
    );

}

export default Candidates;