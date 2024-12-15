import React, { useState, useEffect } from "react";
import countriesName from '../../assets/data.json';

const Flag = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const borders = country.borders;

  useEffect(() => {
    if (borders) {
      const borderCountryNames = borders.map((countryCode) => {
        const borderCountry = countriesName.find((c) => c.alpha3Code === countryCode);
        return borderCountry ? borderCountry.name : null;
      }).filter(name => name !== null);

      setBorderCountries(borderCountryNames);
    }
  }, [borders]);

  return (
    <section className="flag-info">
      <figure>
        <img src={country.flag} alt={`${country.name} flag`} />
      </figure>
      <section className="Country-info">
        <h2>{country.name}</h2>
        <section className="country-data">
          <section>
            <span>
              <strong>Native Name</strong>: <p>{country.nativeName}</p>
            </span>
            <span>
              <strong>Population</strong>: <p>{country.population.toLocaleString()}</p>
            </span>
            <span>
              <strong>Region</strong>: <p>{country.region}</p>
            </span>
            <span>
              <strong>Subregion</strong>: <p>{country.subregion}</p>
            </span>
            <span>
              <strong>Capital</strong>: <p>{country.capital}</p>
            </span>
          </section>
          <section>
            <span>
              <strong>Top Level Domain</strong>: <p>{country.topLevelDomain.join(", ").replace(".", "")}</p>
            </span>
            <span>
              <strong>Currencies</strong>: <p>{country.currencies.map(currency => currency.code).join(", ")}</p>
            </span>
            <span>
              <strong>Languages</strong>: <p>{country.languages.map(lang => lang.name).join(", ")}</p>
            </span>
          </section>
        </section>
        <section className="countries-border">
          <h5>Border Countries:</h5>
          {borderCountries.length > 0 ? (
            <ul>
              {borderCountries.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          ) : (
            <p>No border countries</p>
          )}
        </section>
      </section>
    </section>
  );
};

export default Flag;
