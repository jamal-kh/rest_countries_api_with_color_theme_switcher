import React, { useEffect, useState } from "react";
import Input from "../../component/input/Input";
import OptionBar from "../../component/optionBar/OptionBar";
import Card from "../../component/card/Card";
import UrlData from '../../assets/data.json';
import { debounce } from "lodash";

const Home = () => {
  const [countryList, setCountryList] = useState(UrlData); 
  const [filteredCountries, setFilteredCountries] = useState(UrlData); 
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  // Debounce the filter function to improve performance
  const filterCountries = debounce(() => {
    const filtered = countryList.filter((country) => {
      const isRegionMatch =
        region === "" || country.region.toLowerCase() === region.toLowerCase();
      const isNameMatch =
        searchTerm === "" ||
        country.name.toLowerCase().startsWith(searchTerm.toLowerCase());
      return isRegionMatch && isNameMatch;
    });
    setFilteredCountries(filtered);
  }, 300); 

  useEffect(() => {
    filterCountries();
  }, [countryList, region, searchTerm]);

  return (
    <div>
      <section className="header">
        <Input onSearch={setSearchTerm} />
        <OptionBar onSelectRegion={setRegion} />
      </section>
      <section className="content">
        {filteredCountries.map((country) => (
          <Card
            key={country.name}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            alpha3Code={country.alpha3Code}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
