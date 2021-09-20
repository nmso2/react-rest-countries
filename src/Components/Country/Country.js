import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country">
            <h2>Name: {props.country.name}</h2>
            <img width="200px" src={props.country.flag} alt="" />
            <p>Region: {props.country.capital}</p>
            <p>Region: {props.country.region}</p>
            <p>Population: {props.country.population}</p>
        </div>
    );
};

export default Country;