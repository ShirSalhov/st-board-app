

 export default class ContryService {

    async getCountry() {
        try {
            let response = await fetch('https://stboardserver.azurewebsites.net', { method: "GET" ,   credentials: "include", Origin: 'http://localhost:3000'});
            let body = await response.json();
            return body;
        }
        catch (e) {
            console.log(e);
        }
    }
};


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