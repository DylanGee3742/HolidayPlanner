//Create random number generator based on array length passed through 
const randomNum = arr => {
    let num = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < arr.length; i++) {
        return arr[num];

    }
;}

//Using the random number generator the function picks one of these countries and returns the value
const countryPicker = () => {
    const countries = ['Italy', 'France', 'Spain'];
    let country = randomNum(countries);
    return country;
}; 

//Value of countryPicker() stored in variable country for later use
var country = countryPicker()


//Results of countryPicker determine which array of cities should be access. Random number generator then picks a city and returns value.
const cityPicker = () => {
    const italy = ['Rome', 'Venice', 'Milan'];
    const france = ['Paris', 'Nice', 'Marseille'];
    const spain = ['Barcelona', 'Madrid', 'Seville'];
    if (country === 'Italy') {
        let city = randomNum(italy);
        return city;
    } else if (country === 'France') {
        let city = randomNum(france);
        return city;
    }  else {
        let city = randomNum(spain);
        return city;
    }   

};

//Value of cityPicker stored in variable for later use 
var city = cityPicker();


//Results of cityPicker determine which array of cities should be access. Random number generator then picks an attraction and returns value.
const attractionPicker = () => {
    let attraction = '';
    switch(city) {
        case 'Rome':
            const rome = ['Colossuem', 'Pantheon', 'Borghess Gardens'];
            attraction = randomNum(rome)
            break;
        case'Venice':
            const venice = ['Piazza San Marco', 'Grand Canal', 'Rialto Bridge' ]
            attraction = randomNum(venice)
            break;
        case 'Milan':
            let  milan = ['Il Duomo', 'Castello Sforzesco', 'Pinacoteca di Brera']
            attraction = randomNum(milan)
            break;
        case 'Paris':
            const paris = ['Eiffel Tower', 'Notre Dame Cathedral', 'Louvre Museum']
            attraction = randomNum(paris)
            break;
        case 'Nice':
            const nice = ['Castle Hill', 'Promenade des Anglais', 'Old Town']
            attraction = randomNum(nice)
            break;
        case 'Marseille':
            const marseille = ['Old Port', 'Calanques National Park', 'La Corniche']
            attraction = randomNum(marseille)
            break;
        case 'Barcelona':
            const barcelona = ['Basílica de la Sagrada Familia', 'Casa Batllo', 'Gothic Quarter (Barri Gotic)']
            attraction = randomNum(barcelona)
            break;
        case 'Madrid':
            const madrid = ['Parque del Retiro', 'Santiago Bernabeu Stadium', 'Santiago Bernabeu Stadium']
            attraction = randomNum(madrid)
            break;
        case 'Seville':
            const seville = ['Alcazar of Seville', 'Seville Cathedral & La Giralda', 'Plaza de España']
            attraction = randomNum(seville)
            break;       
} return attraction
};

////Value of attractionPicker stored in variable for later use
var attraction = attractionPicker()

//Creates and prints a message that uses values from previous functions to fill in place holders.
const message = () => {
    return console.log(`Hey there user I'm going to help you plan out a holiday! 
    First lets pick a country, I think you should go to ${country}.
    You should stay in ${city}, it's really great there.
    Whilst you're there I recommend visiting ${attraction}.`);
}

message();