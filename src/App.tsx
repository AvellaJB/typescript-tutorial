import React from 'react';
import './App.css';

/* Voilà quelques exmples de déclaration de variables en Typescript */
let name : string;
let age : number;
let isStudent: boolean;
/* Ici on a la possibilité de déclarer un array de string  :  */
let arrayOfStrings : string[];
let arrayOfNumbers: number[];
/* Ici on peu définir la forme des données de notre array : */
let role : [number, string];
/* Pour role, [4, "Saucisses"] est valables, mais pas [4, 4] */
/* Attention, il s'agit ici d'un array de 2 values, [4, "string", 4, "string"] n'est pas valide. */

/* Ici anyValue peux prendre n'importe quel type de valeur (numbre, string, object, array...) */
let anyValue : any;
/* On peux également déclarer un type d'objet en utilisant type.
cela permet de décrire le contenu qui est attendu pour l'objet en question. */
/* Ajouter un ? permet de rentre la propriété optionnal, donc l'object ne contenant que le name
ne sera pas rejeté. */
type Person= {
  name: string,
  age?: number,
}

let person : Person ={
  name : "JB",
  age: 27
}
/* Un type peut être extended avec la syntaxe suivante */

type PersonDetails= Person & {
  taille : number,
  genre: string,
}

let personWithDetails : PersonDetails = {
  name : "Patrick",
  age: 23, 
  taille : 134,
  genre : "Female"
}

/* Supposons qu'on veuille déclarer un array d'objets déjà typés :   */
let lotsOfPeople : Person[];

/* On peux également donner plusieurs types à une variable grace au pipe */
/* Pour money on aura donc 2 et "deux" qui seront OK. */
let money : string | number;

/* On peux également déclarer le type d'une fonction comme ceci */
let randomFunction : Function;
/* Ici on déclare une fonction, on type son argument mais également son output */
/* La fonction en dessous return un object de type Person déclaré plus haut, mais on pourrais très bien mettre
quelque chose de plus générique genre string ou number; */
let typedFunction : (name:string, age:number) => Person;
/* Une fonction peux return void (undefined) mais aussi never (pas de return) */

/* Utilisation des interfaces */
interface Human {
  name: string,
  age?: number,
}
/* Les infaces peuvent être extended comme les types */

interface SuperHero extends Human  {
  superpower : string;
}

/* On peux également extends des types et des interface ensembles en mélangeatn les deux syntaxes. */


function App() {
  return (
    <div className="App">
    Hello
    </div>
  );
}

export default App;
