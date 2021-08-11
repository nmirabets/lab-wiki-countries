import { React, Component} from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {

    render() {

        return(
            <div className="col-5" >
                <div className="list-group">
                    {this.props.data.map( (country, index) => {
                        return(
                            <Link key={index} className="list-group-item list-group-item-action" to={country.alpha3Code} ><img src={country.flag} alt="" height="50"/> {country.name}</Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default CountriesList;