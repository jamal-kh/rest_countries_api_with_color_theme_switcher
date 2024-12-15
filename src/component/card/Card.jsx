import React from "react";
import { Link } from "react-router-dom";

const Card = ({ flag, name, population, region, capital ,alpha3Code}) => {
  return (
    <Link to={`/country/${alpha3Code}`} className="Item">
      <figure>
        <img src={flag} alt={name} />
      </figure>
      <section className="Country-info">
        <p>{name}</p>
        <span>
          <strong>Population</strong>: <small>{population}</small>
        </span>
        <span>
          <strong>Region</strong>: <small>{region}</small>
        </span>
        <span>
          <strong>Capital</strong>: <small>{capital}</small>
        </span>
      </section>
    </Link>
  );
};

export default Card;
