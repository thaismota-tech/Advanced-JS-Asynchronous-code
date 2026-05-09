//EJERCICIO 1
async function getAllBreeds() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        const breeds = Object.keys(data.message);
        return breeds;
    } catch (error) {
        console.error("Error al obtener las razas:", error);
    }
}
getAllBreeds().then(razas => console.log(razas));

//EJERCICIO 2
async function getRandomDog() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error al obtener la imagen:", error);
    }
}
getRandomDog().then(url => console.log("Imagen aleatoria:", url));

//EJERCICIO 3
async function getAllImagesByBreed() {
    try {
        const response = await fetch('https://dog.ceo/api/breed/komondor/images');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error al obtener las imágenes de la raza Komondor:", error);
    }
}
getAllImagesByBreed().then(imagenes => console.log(imagenes));

//EJERCICIO 4
async function getAllImagesByBreed2(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error al obtener las imágenes:", error);
    }
}
