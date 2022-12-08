import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { NavigationService } from 'src/app/services/navigation.service';
import { GetPeople } from 'src/app/store/api-manager.actions';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: any = null;

  public peopleSearch: Observable<Person[]>;

  constructor(
    private navigationService: NavigationService,
    private store: Store
    ) {
    this.peopleSearch = this.store.select(state => state.apimanager.getPeople);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPeople())
    this.navigationService.getPeople().subscribe((person) => {
      this.people = person;
    })
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
