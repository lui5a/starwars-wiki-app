import { Planet } from "./planet";
interface PersonInterface{
  hello: () => string;
}
export class Person implements PersonInterface {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    planet: Planet = new Planet;
    mass: string;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
    //serialización de json a objeto
    hello(){
      return 'hello ' + this.name;
    }
}

