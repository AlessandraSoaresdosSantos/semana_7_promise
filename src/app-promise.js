import {technologyPromise, getDataFromURL} from './functions-promise/promise-function.js'
import {readDataPeople} from './class/People.js'

const divTela = document.querySelector('#div-tela')

// Exemplo Promise - utilizando parâmetro boleano
technologyPromise(false)
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("Promise finished.");
});


// Exemplo Promise - utilizando consumo de API Rest
const apiURL = "https://swapi.dev/api/people/1";

    getDataFromURL(apiURL)
    .then( result =>
    {
        let jsonResult = readDataPeople(result);
        
        for (var key in jsonResult){
            var value = jsonResult[key];
            
            divTela.innerHTML+=`<li>${key} : ${value} </li>`;
          } 
    })
    .catch( error => console.log(error))
    .finally(() => console.log("Done."))
    