import React, { useState } from "react";
import calculatePopularity from "../utils/calculatePopularity";

const Candidate = ({ image, name, description, last_update, categories }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [vote, setVote] = useState("");
  const popularity = calculatePopularity(likes, dislikes);
  const unpopularity =
    popularity > 0 ? 100 - popularity : dislikes > 0 ? 100 : 0;
  const isPopular = popularity >= unpopularity ? true : false;
  const [hasVoted, setHasVoted] = useState(false);

  const changeHandler = (event) => {
    setVote(event.target.value);
  };

  const submitVote = (event) => {
    event.preventDefault();

    if (vote === "yes" || vote === "no") {
      if (vote === "yes") {
        setLikes((prevLikes) => prevLikes + 1);
      } else if (vote === "no") {
        setDislikes((prevDislikes) => prevDislikes + 1);
      }
      setHasVoted(true);
    }
  };

  return (
    <div className="candidates__card">
      <img src={image} alt={name} className="candidates__card__image" />
      <div className="candidates__card__title__wrapper">
        <span
          className={`candidates__thumbs-status candidates__thumbs-status--${
            isPopular ? "up" : "down"
          }`}
        >
          <i className="far fa-thumbs-up"></i>
        </span>
        <h2 className="candidates__card__title">{name}</h2>
      </div>
      <h4 className="candidates__card__date">
        {last_update}
        <span className="candidates__card__date__categories">
          {" "}
          in {categories}
        </span>
      </h4>
      <h3 className="candidates__card__description">
        {hasVoted ? "Thanks you for voting!" : description}
      </h3>
      <div className="candidates__card__divisor">
        {hasVoted ? (
          <button
            onClick={() => setHasVoted(false)}
            className="candidates__card__view-report-button"
          >
            Vote Again
          </button>
        ) : (
          <form className="candidates__card__form" onSubmit={submitVote}>
            <div
              onChange={changeHandler}
              className="candidates__card__form__vote"
            >
              <input
                value="yes"
                id={`thumbs-up-${name}`}
                type="radio"
                name={`vote-${name}`}
                className="hide candidates__card__form__radio"
              ></input>
              <label
                htmlFor={`thumbs-up-${name}`}
                className="candidates__thumbs-indicator candidates__thumbs-indicator__up"
              >
                <i className="far fa-thumbs-up"></i>
              </label>

              <input
                value="no"
                id={`thumbs-down-${name}`}
                type="radio"
                name={`vote-${name}`}
                className="hide candidates__card__form__radio"
              ></input>
              <label
                htmlFor={`thumbs-down-${name}`}
                className="candidates__thumbs-indicator candidates__thumbs-indicator__down"
              >
                <i className="far fa-thumbs-up inverted"></i>
              </label>
            </div>
            <button
              type="submit"
              className="candidates__card__view-report-button"
            >
              Vote now
            </button>
          </form>
        )}
      </div>
      <div className="candidates__graphic-report">
        <div className="candidates__graphic-report__bars">
          <div
            className="candidates__graphic-report__thumbs-up "
            style={{ width: `${popularity}%` }}
          ></div>
          <div
            className="candidates__graphic-report__thumbs-down"
            style={{ width: `${unpopularity}%` }}
          ></div>
        </div>
        {/* stats bar */}
        <div
          className="candidates__graphic-report__values"
          style={{ display: likes === 0 && dislikes === 0 ? "none" : "" }}
        >
          <div className="">
            <span className="candidates__graphic-report__thumbs-up__icon">
              <i className="far fa-thumbs-up"> </i>
            </span>
            <span className="candidates__graphic-report__thumbs-down__value">
              {popularity}
              <span className="candidates__graphic-report__sign"> %</span>
            </span>
          </div>
          <div>
            <span className="candidates__graphic-report__thumbs-down__value">
              {unpopularity}
              <span className="candidates__graphic-report__sign"> %</span>
            </span>
            <span className="candidates__graphic-report__thumbs-down__icon">
              <i className="far fa-thumbs-up inverted"> </i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
