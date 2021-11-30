export function technologyPromise(technologyIsFound){
    return  new Promise(function (resolve, reject) 
    {
        if (technologyIsFound) {
            resolve("Technology is found");
        } else {
            reject("Technology is not found");
        }
    });
}

export function getDataFromURL(url){

    return new Promise( function(resolve, reject) {
        
        let request = new XMLHttpRequest();
        request.open('GET', url);

        request.onload = function() {
          if (request.status === 200) {
            resolve(request.response);
          } else {
            reject(`Ocorreu um erro na chamada para a url ${url}!`);
          }
        };
        request.send();
    })
};