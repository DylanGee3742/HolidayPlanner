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
console.log(country);

//Results of countryPicker determine which array of cities should be access. Random number generator then picks a city and returns value.
const cityPicker = () => {
    const italy = ['Rome', 'Venice', 'Milan'];
    const france = ['Paris', 'Nice', 'Marseille'];
    const spain = ['Barcelona', 'Madrid', 'Sevilla'];
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
console.log(city);
