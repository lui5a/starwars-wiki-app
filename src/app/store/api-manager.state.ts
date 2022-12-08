import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Searches, ApiManagerStateModel } from './api-manager.model';
import { AddSearch, FilterPeople, FilterPlanets, GetPeople, GetPlanets } from './api-manager.actions';
import { SearchService } from '../services/search.service';
import { Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { tap } from 'rxjs';


@State({
  name: 'apimanager',
  defaults: {
    searches: [],
    peopleList: [],
    planetList: []
  }
})
@Injectable()
export class ApiManagerState {

  constructor(
    private searchService: SearchService,
    private navigationService: NavigationService
  ) { }
  @Selector()
  static getSearches(state: ApiManagerStateModel) { return state.searches; }
  static getPeople(state: ApiManagerStateModel) { return state.peopleList; }
  static getPlanets(state: ApiManagerStateModel) { return state.planetList; }

  @Action(AddSearch)
  add({ getState, patchState }: StateContext<ApiManagerStateModel>, { payload }: AddSearch) {
    const state = getState();

    const allSearches = [...state.searches, payload]
    let resultsToShow: Searches[] = [];

    if (allSearches.length > 3) {
      resultsToShow = allSearches.slice(Math.max(allSearches.length - 3, 1))
      patchState({
        searches: [...resultsToShow]
      });
    } else {
      patchState({
        searches: [...allSearches]
      });
    }
  }

  @Action(FilterPeople)
  FilterPeople({ patchState }: StateContext<ApiManagerStateModel>, { payload }: FilterPeople) {
    return this.searchService.searchPeople(payload).pipe(tap((res) => {
      patchState({
        peopleList: res
      })
    }));
  }

  @Action(FilterPlanets)
  FilterPlanets({ patchState }: StateContext<ApiManagerStateModel>, { payload }: FilterPlanets) {
    return this.searchService.searchPlanets(payload).pipe(tap((res) => {
      patchState({
        planetList: res
      })
    }));
  }

}
