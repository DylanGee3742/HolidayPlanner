//Create random number generator based on array length passed through 
const randomNum = arr => {
    let num = Math.floor(Math.random() * arr.length);
    for (let i = 0; i < arr.length; i++) {
        return arr[num];

    }
;}