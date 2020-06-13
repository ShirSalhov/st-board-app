import React, { Component } from 'react';
import { ContryService } from '../services/country-service';
//import CountryInfo from './../CountryInfo/ComponentInfo';
//import { Country } from './../../models/country';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countryArray: [],
            selectedCountry: {}
        };

        this.contryService = new ContryService();

        this.contryService.setUrl("ALL");
        this.contryService.getCountry().then(
            (res) => {
                debugger;
                this.setState({
                    countryArray: res,
                    selectedCountry: res[0].date
                })
            }
        )

    }

   


    render() {
        return (
            <div className="App">

                <div>
                    <table>
                    {
                            this.state.countryArray.map((elemnt, index) => (
                                <th>
                            <tr>{elemnt.date}</tr>
                            <tr>{elemnt.temperatureC}</tr>
                            <tr>{elemnt.temperatureF}</tr>
                            <tr>{elemnt.summary}</tr>
                            </th>
                            ))}
                        </table>
                    
                   
                
                </div>
            </div>
        );
    }
}

export default Home;
