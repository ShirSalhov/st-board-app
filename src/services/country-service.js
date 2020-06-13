//import countryInfo from "../components/CountryInfo/ComponentInfo";

export class ContryService {

    setUrl(actionType, param) {
        switch (actionType) {
            case "ALL":
                this.url = `https://restcountries.eu/rest/v2/all?fields=name`;
                break;

            case "SINGLE_COUNTRY":
                this.url = `https://restcountries.eu/rest/v2/name/${param}?fullText=true&fields=borders;alpha3Code;flag;name`;
                break;

            default:
                this.url = `https://restcountries.eu/rest/v2/all?fields=name`;
                break;
        }

       // this.getCountry
    }


    /** 
     *@function getCountry - this function exec a http req
     *@returns response.json - the result that we got from the http req
    */
    async getCountry() {
        try {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            let response = await fetch(proxyurl+'https://stboardserver.azurewebsites.net/weatherforecast', { method: "GET", headers: {
                'Content-Type': 'text',
                'credentials': "include", 
                'Access-Control-Allow-Origin':  'http://127.0.0.1:3000'
              } });
            let body = await response.json();
            return body;
        }
        catch (e) {
            console.log(e);
        }
    }
}



/*
function : fetch
parameters:
1) url (server address) - string;
2) request options - {
    body
    headers
    method
}

returns:
Promise<Response>
*/