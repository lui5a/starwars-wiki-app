import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddSearch } from 'src/app/store/search.actions';
import { Searches } from 'src/app/store/search.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searches: Observable<Searches[]>;
  public text: string;

  constructor(
    private store: Store
    ) {
      this.searches = this.store.select(state => state.searches.searches);
    }

  ngOnInit(): void {
  }

  public addSearch() {
    this.store.dispatch(new AddSearch({ text: this.text }));
    this.text = '';
  }

}
