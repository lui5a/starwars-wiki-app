import { Planet } from "./planet";

export class Person {
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
}
