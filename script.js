'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
    const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`

    countriesContainer.insertAdjacentHTML('beforeend', html);
     countriesContainer.style.opacity = 1;
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
     countriesContainer.style.opacity = 1;
}

///////////////////////////////////////
// const getCountryData = function (country) {
// const request = new XMLHttpRequest();
// request.open('Get', `https://restcountries.com/v2/name/${country}`);
// request.send();


// request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText); //JSON.parse() is a method that takes a JSON string as input and returns a JavaScript object. In this case
//     console.log(data);

//     const html = ` <article class="country">
// <img class="country__img" src="${data.flag}" />
// <div class="country__data">
//   <h3 class="country__name">${data.name}</h3>
//   <h4 class="country__region">${data.region}</h4>
//   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//   <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//   <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
// </div>
// </article>`

// countriesContainer.insertAdjacentHTML('beforeend', html);
// countriesContainer.style.opacity = 1;

// })
// }

// getCountryData('portugal');
// getCountryData('usa');


// // AJAX call country 1 
// const getCountryAndNeighbour = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('Get', `https://restcountries.com/v2/name/${country}`);
//     request.send();
    
    
//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.responseText); //JSON.parse() is a method that takes a JSON string as input and returns a JavaScript object. In this case
//         console.log(data);

//         // Render country 
//         renderCountry(data);

//         // Get neighbour country 
//         const [neighbour] = data.borders;
//         if (!neighbour) return;

//         // AJAX call country 2
//         const request2 = new XMLHttpRequest();
//     request2.open('Get', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function() {
//         const data2 = JSON.parse(this.responseText);
//         console.log(data2); 

//         renderCountry(data2, 'neighbour');
//     })
        
//     })
//     }
    
//     // getCountryAndNeighbour('portugal');
//     getCountryAndNeighbour('usa');


// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];

//         if (!neighbour) 
//             throw new Error(`Country not found (${response.status})`);

//         // Counrty 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//         console.log(`something went wrong ${err.message}. Try again!`)
//         renderError(`something went wrong ${err.message}. Try again!`)
//     })
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })

// }



// const getJSON = function (url, errorMsg = 'Something went wrong') {
//     return fetch(url).then(reponse => {
//         if (!reponse.ok) throw new Error(`${errorMsg} (${reponse.status})`);
//         return reponse.json();
//     })
// }

// const getCountryData = function (country) {
//         getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if (!neighbour) 
//             throw new Error('No neighbour found!');

//             // Counrty 2
//             return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
//         })
//         .then(data => renderCountry(data, 'neighbour'))
//         .catch(err => {
//             console.log(`something went wrong ${err.message}. Try again!`)
//             renderError(`something went wrong ${err.message}. Try again!`)
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })

//     }

//     btn.addEventListener('click', function() {
//         getCountryData('portugal')
//     })



// const whereAmI = (lat, lng) => {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//         if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);

        
//         return response.json()})
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`)
    
//         return fetch (`https://restcountries.com/v2/name/${data.country}`)
//      })
//      .then(response => response.json())
//      .then(data => renderCountry(data[0]))
//      .catch(err => {
//         console.log(`something went wrong ${err.message}. Try again!`)
//         renderError(`something went wrong ${err.message}. Try again!`)
//         })
//      .finally(() => {
//         countriesContainer.style.opacity = 1;
//         })
// }

// console.log(whereAmI(52.508, 13.381));
// console.log(whereAmI(19.037, 72.873));
// console.log(whereAmI(-33.933, 18.474));


// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve,reject);
//     })
// }

// const whereAmI = () => {
//     getPosition().then(pos => {
//         console.log(pos.coords)
//         const {latitude, longitude} = pos.coords;

//         return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
//     })
//     .then(response => {
//         if (!response.ok) throw new Error(`Problem with geocoding ${res.status}`);
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//         console.log(`You are in ${data.city}, ${data.country}`)
    
//         return fetch (`https://restcountries.com/v2/name/${data.country}`)
//      })
//      .then(response => {
//         if (!response.ok) throw new Error(`Country not found (${response.status})`);
    
//         return response.json();

//      })
//      .then(data => renderCountry(data[0]))
//      .catch(err => {
//         console.log(`something went wrong ${err.message}. Try again!`)
//         })
//      .finally(() => {
//         countriesContainer.style.opacity = 1;
//         })
// }

// btn.addEventListener('click', whereAmI);

// const wait = function (seconds) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, seconds = 1000);
//     })
// }

// const imgContainer = document.querySelector('.images')

// const createImages = function (imgPath) {
//     return new Promise(function  (resolve, reject){
//         const img = document.createElement('img')
//         img.src = imgPath 

//         img.addEventListener('load', function() {
//             imgContainer.appendChild(img)
//             resolve(img)
//         });
        
//         img.addEventListener('error', function() {
//             reject(new Error('image not found'))
//         })
//     })
// }

// let currentImg

// createImages('img/img-1.jpg')
// .then(img => {
//     currentImg = img
//     console.log("image 1 loaded")
//     return wait(2)
// }).then(() => {
//     currentImg.style.display = 'none'
//     return createImages('img/img-2.jpg')
// })
// .then(img => {
//     currentImg = img 
//     console.log("image 2 loaded")
//     return wait(2)
// })
// .then(img => {
//     currentImg.style.display = 'none'
// })
// .catch(err => {
//     console.error(err);
// })


const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
}


const whereAmI = async function () { // 
    try {
    // Geolocation
    const pos = await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

    // Reverse geocoding 
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`) // instead of using fetch and then you can use this await
    if(!resGeo.ok) throw new Error('Problem getting location data try refereshing')
    const dataGeo = await resGeo.json(); // returns a new promise and converts it into a js object


    // Country data 
    const res = await fetch (`https://restcountries.com/v2/name/${dataGeo.country}`)
    if(!res.ok) throw new Error('Problem getting country data try refereshing')
    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`
    }
    catch (err) {
        console.error(`${err}`);
        renderError(`something went wrong ${err.message}`)
    }
};

console.log("I will get your location");

(async function () {
    try{
        const city = await whereAmI()
        console.log(`2: ${city}`);
    } catch(err){
        console.log(`2: ${err.message}`);
    }
    console.log('3: Finished getting the location')
})()
