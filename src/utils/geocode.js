const request = require('request');

const geocode =(location,callback)=>{

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Ankara.json?access_token=pk.eyJ1IjoiZ2VuMXVub2RlanNraW5nIiwiYSI6ImNrank3cDZvbzAxYW0ydmxxaDJjZ29veG4ifQ.nFVEb_OmbWvyDhd9WbmowA"
    request({url,json:true},(error,response)=>{

        if(error){
            return callback('İnternet erişiminiz yoktur.',null)
        }
        callback(null,response.body.features[0].center)
    })

}
module.exports=geocode;