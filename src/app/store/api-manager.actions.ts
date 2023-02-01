import { Searches } from './api-manager.model';


export class GetPeople {
  static readonly type = '[GETPEOPLE] GetPeople';
  constructor( ) {}
}

export class GetPlanets {
  static readonly type = '[GETPLANETS] GetPlanets';
  constructor() {}
}

export class AddSearch {
  static readonly type = '[SEARCH] Add';
  constructor( public payload: Searches ) {}
}

export class FilterPeople {
  static readonly type = '[FILTER] FilterPeople';
  constructor( public payload: string ) {}
}

export class FilterPlanets {
  static readonly type = '[FILTER] FilterPlanets';
  constructor( public payload: string ) {}
}

