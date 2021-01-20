// control of web server
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const { request } = require('http');

app.set('view engine','hbs');
const viewsPath=path.join(__dirname,'../templates/views')
const publicPath=path.join(__dirname,'../public');
const partialPath=path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPath);
app.set('views', viewsPath)
app.use(express.static(publicPath))


const port = process.env.PORT || 3000

app.get('', (req,res)=>{
    
    

    res.render('index',{
        title:"Forecast Homepage",
        author : "Ömer Faruk Yeşilyurt"
    })
})

app.get('/about',(req,res)=>{

    res.render('about')

})

app.get('/weather',(req,res)=>{
    if(!req.query.location){
        return res.send({
            error:"Lütfen bir lokasyon giriniz"
        });
    }

    geocode(req.query.location,(err,data)=>{

        const latitude = data[1];
        const longtitude = data[0];

        forecast({latitude,longtitude},(error,forecastData)=>{

            res.send({
              temperature : forecastData.current.temperature,
              durum : forecastData.current.weather_descriptions[0],
              hissedilen : forecastData.current.feelslike,
              yer : forecastData.location.region,
              ulke : forecastData.location.country
            })
        })

    })

    

})



app.listen(port,()=>{
    console.log('started')
})