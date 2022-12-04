import { Component, OnInit } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { Person } from 'src/app/models/person';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: any = null;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
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
