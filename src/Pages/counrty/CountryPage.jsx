import React from "react";
import flagData from "../../assets/data.json"; 
import Button from "../../component/button/Button";
import { useParams } from "react-router-dom";
import Flag from "../../component/flag/flag"; // Ensure the path is correct

const CountryPage = () => {
  const { countryFlag } = useParams();

  // Find the country data by alpha3Code
  const countryData = flagData.find(c => c.alpha3Code === countryFlag);

  if (!countryData) {
    return <div>Country not found</div>; // Handle case where country is not found
  }

  console.log(countryData)
  return (
    <section className="content-flagpage">
      <section className="header">
        <Button />
      </section>
      <Flag country={countryData} />
    </section>
  );
};

export default CountryPage;
