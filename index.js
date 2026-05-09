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
