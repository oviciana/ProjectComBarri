[![Skylab](https://github.com/Iggy-Codes/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)

[![AngularJS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![HTML5, CSS3 and JS](https://github.com/Iggy-Codes/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/)
[![Bootstrap](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)

[![Bower](https://github.com/Iggy-Codes/logo-images/blob/master/logos/bower.png)](https://bower.io//)


# ComBarrio

## Description

This is the final web development project applying techniques learned in the [Skylab Coders](http://www.skylabcoders.com/en/) Bootcamps (Winter 2017 Edition).

Can be seen online at: https://comer-barri17.herokuapp.com


## Coding Style

All the code has been developed under the [JavaScript Standard Style](http://standardjs.com/) and the style guide of the John Papa

## Topics

Topics covered in this demo:

- **API endpoints** using data from a **MongoDb collection** to retrieve data or perform actions:
    + `GET` `/shops/zipCode/:zipCode` → get all shops by zip code
    + `GET` `/shops/bussinessType/:bussinessType` → get shops by bussiness type
    + `GET` `/shop/:id` → get shop by id
    + `GET` `/shops/:zipCode/:bussinessType` → get all shops by zip code and bussiness type
    + `POST` `/sendMail` → send and email with the order shop
    

- **Angular App** using this data to display the info to the user
    + **controllers**
    + **services**

- Use of **Bootstrap for Angular** `ui.bootstrap` (Modals, dropdowns...)

- **Google Maps**
    + Display coordinates as markers in the map → `marker`
    + Fit the map to markers → `bounds`
    + Draggable marker and capture event and new coordinates → `draggable: true`

## Installation 

To install dependencies you can just do

```
bower install
node install
```


To run local server you need to create a `.env` w/ the following variables...

    DB_URI=mongodb://localhost:27017/XXXXX
    PASSXXXXXXXXXXXXXXXX

With this, to start the project you just can do... 

    npm run dev

To run remotely (in heroku) the proper environment variables should be set before deploying...

    DB_URI=mongodb://<%USER%>:<%PASS%>@XXXXXXXXX.mlab.com:00000/xxxxxxxxxxx
    heroku config:set PASS=password email from:


## Built With

* [SublimeText](http://https://www.sublimetext.com/) - Text editor

## Authors

* [Oscar Viciana] (https://github.com/oviciana)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [SkylabCoders](https://github.com/SkylabCoders)
* [JuanMa Garrido](https://github.com/juanmaguitar)
* [AlejandroDG](https://github.com/agandia9)
