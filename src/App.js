import { React, Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { getCountryData } from './services/dataAPI';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesData: [],
    }
  }

  componentDidMount = () => {

    getCountryData().then( (data) => {
      this.setState({
        countriesData: data
      })
    })
  }

  render() {

    const { countriesData } = this.state;

    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <div className="row">
            <CountriesList data={countriesData} />
            <Switch>
              <Route path="/:countryId" component={CountryDetails} data={countriesData} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
