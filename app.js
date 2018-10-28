// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');

function printMessage(username, badgeCount, points){
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`
       // console.log(message)
}

printMessage("chris", 100, 2000000000)

function getProfile(username){

// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`,response => {

   // console.log(response.statusCode)

    // Read the data
    let body = ""
    response.on('data', data => {
        body += data.toString()
    })

    response.on('end', () => {
        const profile = JSON.parse(body)
        printMessage(username, profile.badges.length, profile.points.JavaScript)
       
    })
    // Parse the data
    // Print the data

})

}
console.dir(process)
const users = ['chalkers', 'cre88', 'alenaholligan']

users.forEach(username => {
    getProfile(username)
})


