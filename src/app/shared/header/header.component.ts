import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddSearch, FilterPeople, FilterPlanets } from 'src/app/store/api-manager.actions';
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
    this.searches = this.store.select(state => state.searches.searches);
  }

  ngOnInit(): void {
  }

  public addSearch() {
    this.store.dispatch(new AddSearch({ text: this.text }));
    this.activatedRoute.url.split('/')[1] === 'people' ? this.store.dispatch(new FilterPeople(this.text)) : this.store.dispatch(new FilterPlanets(this.text))
    this.text = '';
  }



}
