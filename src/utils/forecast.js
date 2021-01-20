const request = require('request');


const forecast = (cord,callback)=>{

    const url = "http://api.weatherstack.com/current?access_key=cb5621a7e041a6bbce6d0efe5391b04a&query="+cord.latitude+","+ cord.longtitude;

    request({url,json:true},(error,response)=>{

        
        callback(null,response.body.current)

        

    })

}


module.exports=forecast;



