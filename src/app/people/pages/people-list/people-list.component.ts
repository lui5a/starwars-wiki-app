import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { NavigationService } from 'src/app/services/navigation.service';
import { GetPeople } from 'src/app/store/api-manager.actions';
import { ApiManagerState } from 'src/app/store/api-manager.state';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  @Select(ApiManagerState.getPeople) peopleList$: Observable<Person[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetPeople())
  }


  transformHeight(retrievedHeight: string) {

    let heightResult: string = '';

    if (parseInt(retrievedHeight) > 100) {
      heightResult = 'high'
    }
    else if (parseInt(retrievedHeight) < 100) {
      heightResult = 'low'
    } else {
      heightResult = 'normal'
    }
    return heightResult
  }


  goToDetail(url: string){
    return url.replace(/\/$/, '').split('/').pop();
  }

}
