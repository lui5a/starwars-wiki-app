import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Searches, ApiManagerStateModel } from './api-manager.model';
import { AddSearch, FilterPeople, FilterPlanets, GetPeople, GetPlanets, RepeatSearch } from './api-manager.actions';
import { SearchService } from '../services/search.service';
import { Injectable } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { tap } from 'rxjs';
import { Person } from '../models/person';
import { Planet } from '../models/planet';


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

  @Selector()
  static getPeople(state: ApiManagerStateModel): Person[] { return state.peopleList; }

  @Selector()
  static getPlanets(state: ApiManagerStateModel): Planet[] { return state.planetList; }


  @Action(GetPeople)
  GetPeople({ patchState }: StateContext<ApiManagerStateModel>, { }: GetPeople) {
    return this.navigationService.getPeople().pipe(tap((res) => {
      patchState({
        peopleList: res
      })
    }));
  }

  @Action(GetPlanets)
  GetPlanets({ patchState }: StateContext<ApiManagerStateModel>, { }: GetPlanets) {
    return this.navigationService.getPlanets().pipe(tap((res) => {
      patchState({
        planetList: res
      })
    }));
  }

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

  @Action(RepeatSearch)
  RepeatSearch({ dispatch }: StateContext<ApiManagerStateModel>, { payload }: RepeatSearch) {
    payload.type === 'planets' ? dispatch( new FilterPlanets(payload.text)) : dispatch( new FilterPeople(payload.text))
  }
}
