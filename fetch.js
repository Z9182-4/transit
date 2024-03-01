const fetch = require('node-fetch')
const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

fetch(`https://api.translink.ca/rttiapi/v1/buses?apikey=${process.env.TRANSLINK_API_KEY}`)
.then(response => response.text())
.then(data => fs.writeFileSync('buses.xml', data));