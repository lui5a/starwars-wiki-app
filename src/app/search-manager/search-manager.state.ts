import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { SearchManagerAction } from './search-manager.actions';

export class SearchManagerStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<SearchManagerStateModel>({
  name: 'searchManager',
  defaults
})
@Injectable()
export class SearchManagerState {
  @Action(SearchManagerAction)
  add({ getState, setState }: StateContext<SearchManagerStateModel>, { payload }: SearchManagerAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
