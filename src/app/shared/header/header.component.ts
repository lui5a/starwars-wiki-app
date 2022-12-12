import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddSearch, FilterPeople, FilterPlanets, RepeatSearch } from 'src/app/store/api-manager.actions';
import { Searches } from 'src/app/store/api-manager.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searches: Observable<Searches[]>;
  public text: string;

  constructor(
    private store: Store,
    protected activatedRoute: Router
  ) {
    this.searches = this.store.select(state => state.apimanager.searches);
  }

  ngOnInit(): void {
  }

  public addSearch() {
    const type = this.activatedRoute.url.split('/')[1]
    this.store.dispatch(new AddSearch({ text: this.text, type: type }));
    type === 'people' ? this.store.dispatch(new FilterPeople(this.text)) : this.store.dispatch(new FilterPlanets(this.text))
    this.text = '';
  }

  goToPreviousSearch(search: Searches){
    this.store.dispatch(new RepeatSearch(search));
  }


}
