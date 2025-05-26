
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
    }
    break;

  default:
    console.error("tipo non supportato")
    break;
}

//SNACK 2

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  mail: "anto@azienda.com"
  contratto: "indeterminato" | "determinato" | "freelance"

}

const impiegato: Dipendente = {
  nome: "Antonello",
  cognome: "Antonellucci",
  annoNascita: 1968,
  sesso: "m",
  anniDiServizio: [1995, 1996, 1997, 2004],
  mail: "anto@azienda.com",
  contratto: "freelance"
}

console.log(impiegato)


//SNACK 3

