import { React, Component } from 'react';
import countries from '../countries.json'
//import { getCountryData } from '../services/dataAPI';

class CountryDetails extends Component {

    render() {

        const { countryId } = this.props.match.params

        // const country = getCountryData( (data) => {
        //     return data.find(country => country.alpha3Code === countryId);
        // })

        // console.log(country);

        const country = countries.find(country => country.cca3 === countryId)

        return(
            <div className="col-7">
                <h1>{country.name.official}</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td >Capital</td>
                            <td>{country.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Area</td>
                            <td>
                                {country.area} km
                                <sup>2</sup>
                            </td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>
                                <ul>
                                    {country.borders.map( (border, index) => {
                                        return(
                                            <li key={index}>
                                                <a href={border}>{border}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
          </div>
        )
    }
}

export default CountryDetails;