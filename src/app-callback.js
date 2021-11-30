const divTela = document.querySelector('#div-tela')

window.onload = () =>(callBackTech(logTechDetails, "Javascript"))



function callBackTech(callback, tech) {
    divTela.innerHTML = "Calling callBackTech! <br/><br/>";
    if (callback) {
        callback(tech);
    }
    divTela.innerHTML += "Calling callBackTech finished! <br/><br/>";
  }
  
  function logTechDetails(tech) {
    if (tech) {
        divTela.innerHTML +=`The technology used is: ${tech} <br/><br/>`;
    }
  }
  

  //callBack - Async
  function callBackTechAsync(callback, tech) {
   console.log("Calling callBackTech - Async!");
    if (callback) {
        setTimeout(() => callback(tech), 2000)
    }
   console.log("Calling callBackTech - Async finished!");
}

function logTechDetailsAsync(tech) {
    if (tech) {
        console.log(`The technology used is: ${tech} <br/><br/>`);
    }
}
 