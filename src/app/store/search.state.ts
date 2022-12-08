import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Searches, SearchStateModel } from './search.model';
import { AddSearch } from './search.actions';

@State({
  name: 'searches',
  defaults: {
    searches: []
  }
})
export class SearchesState {
  @Selector()
  static getSearches(state: SearchStateModel) { return state.searches; }

  @Action(AddSearch)
  add({ getState, patchState }: StateContext<SearchStateModel>, { payload }: AddSearch) {
    const state = getState();

    const allSearches = [  ...state.searches, payload]
    let resultsToShow: Searches[] = [];

    if(allSearches.length > 3 ){
      resultsToShow = allSearches.slice(Math.max(allSearches.length - 3, 1))
      patchState({
        searches: [  ...resultsToShow]
      });
    } else{
      patchState({
        searches: [  ...allSearches]
      });
    }
  }
}
