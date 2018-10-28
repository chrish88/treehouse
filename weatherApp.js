//connect to wunderground API
const http = require('http');
let wunderCall = "http://api.wunderground.com/api/6f1e96e055f4b933/forecast/settings/q/89166.json";

let body = ""

http.get(wunderCall, response => {
    if(response.statusCode == 200){
        console.log(`response is all good`)
        
    }

     // Read from the data event handler on the response object
     //converts data to string and adds it to body var
    response.on('data', data => {
        body += data.toString()
    })

    //implements the end handler and then parses body var to json object
    response.on('end', () => {
        console.log(JSON.parse(body))
    })

    let wuResponse = response
    console.log(wuResponse)
})

