import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/models/planet';
import { NavigationService } from 'src/app/services/navigation.service';
import { GetPlanets } from 'src/app/store/api-manager.actions';
import { ApiManagerState } from 'src/app/store/api-manager.state';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  @Select(ApiManagerState.getPlanets) planetList$: Observable<Planet[]>;

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPlanets())
  }

  goToDetail(url: string){
    return url.replace(/\/$/, '').split('/').pop();
  }
}


