import { Searches } from './search.model';

export class AddSearch {
  static readonly type = '[SEARCH] Add';
  constructor( public payload: Searches ) {}
}
