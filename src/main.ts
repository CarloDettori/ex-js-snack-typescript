
//SNACK 1
let apiData: unknown

switch (typeof apiData) {

  case "string":
    console.log(apiData.toUpperCase())
    break;

  case "number":
    console.log(apiData * 2)
    break;

  case "boolean":
    apiData === true ? console.log("si") : console.log("no")
    break;


  case "object":
    if (apiData === null) {
      console.log("il dato è vuoto")
    } else if (Array.isArray(apiData) === true) {
      console.log(apiData.length)
    } else if (Array.isArray(apiData) === true) {
      console.log(apiData.length)
    }
    break;

  default:
    console.error("tipo non supportato")
    break;
}

//SNACK 2




//SNACK 3

