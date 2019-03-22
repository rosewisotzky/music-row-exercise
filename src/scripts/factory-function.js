const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

const createCountryArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}
const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}
chattenRecords.push(createCountryArtist("Bruce Atikins", "Country", "23"), createCountryArtist("Bartholomew Danielson", "Bluegrass", "23"), createCountryArtist("Avilee Dallas", "Country", "19"));
jumpStopRecords.push(createFunkArtist("Dre Funkz", "Funk", "25"), createRapArtist("Dusta Grimes", "Rap", "21"), createRapArtist("Loyonce Branis", "Rap", "27"));
polarRecords.push(createPopArtist("Jensen Brown", "Pop", "20"), createPopArtist("Austin Kinkaid", "Pop", "22"));

console.log(chattenRecords);
console.log(jumpStopRecords);
console.log(polarRecords);
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.



// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old