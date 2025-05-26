
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


//SNACK 3

type Developer = Dipendente & {
  livelloEperienza: "junior" | "mid" | "senior";
  linguaggi: string[];
  certificazioni: string[];
}

const dipendente: Developer = {
  nome: "Francesco",
  cognome: "Cialfi",
  annoNascita: 2002,
  sesso: "m",
  anniDiServizio: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
  mail: "anto@azienda.com",
  contratto: "indeterminato",
  livelloEperienza: "senior",
  linguaggi: ["JavaScript", "HTML", "CSS", "React", "TypeScript"],
  certificazioni: ["Boolean", "Udacity"],
}




type ProjectManager = Dipendente & {
  teamSize: number | null;
  budgetGestito: number;
  stakeholderPrincipali: string[] | undefined;
}

const manager: ProjectManager = {
  nome: "Gianfranco",
  cognome: "Frasti",
  annoNascita: 1979,
  sesso: "m",
  anniDiServizio: [1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997,],
  mail: "anto@azienda.com",
  contratto: "freelance",
  teamSize: 23,
  budgetGestito: 2400,
  stakeholderPrincipali: ["Giovanni_Bizzantini", "Redegardo_Frastinelli", "Pistirzio_Fantoni", "Pancrazio_Bucantellinacci"]
}




type Team = {
  nome: string;
  progettoAttuale: string | undefined;
  budget: number;
  membri: [ProjectManager, ...Developer[]]

}

const Team1 = {
  nome: "scorpions",
  progettoAttuale: "BDoctor",
  budget: 2400,
  membri: [manager, dipendente]

}

console.log(Team1)