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


// EJERCICIO 5
async function getGitHubUserProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
    }
}


// EJERCICIO 6
async function printGithubUserProfile(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    const img = user.avatar_url;
    const name = user.name;
    const body = document.querySelector('body');
    const imagenHTML = document.createElement('img');
    imagenHTML.src = img;
    body.append(imagenHTML);
    const nombreHTML = document.createElement('p');
    nombreHTML.textContent = name;
    body.append(nombreHTML);
    return { img, name };
}

// EJERCICIO 7
async function getAndPrintGitHubUserProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const user = await response.json();
        const img = user.avatar_url;
        const name = user.name
        const repos = user.public_repos;
        return `<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
    <p>Public repos: ${repos}</p>
</section>`;
    } catch (error) {
        console.error("Error al generar la tarjeta HTML:", error);
    }
}
