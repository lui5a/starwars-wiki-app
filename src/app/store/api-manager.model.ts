import { Person } from "../models/person";
import { Planet } from "../models/planet";

export class ApiManagerStateModel {
  searches: Searches[];
  peopleList: Person[];
  planetList: Planet[];
}
export interface Searches {
  text: string;
  type: string;
}
