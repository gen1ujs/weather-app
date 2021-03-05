const request = require('request');


const forecast = (cord,callback)=>{

    const url = "http://api.weatherstack.com/current?access_key="""""""""""""""&query="+cord.latitude+","+ cord.longtitude;

    request({url,json:true},(error,response)=>{

        
        callback(null,response.body)

        

    })

}


module.exports=forecast;



