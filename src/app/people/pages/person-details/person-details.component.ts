import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  personId: any;
  personDetails: any;

  constructor(protected activated: ActivatedRoute, private navigationService: NavigationService) {
    this.activated.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
          this.personId =  paramMap.get('id')
      }
    });
  }

  ngOnInit(): void {

  this.navigationService.getPersonDetail(this.personId).subscribe((res)=> {
    this.personDetails = res;
  })


  }
}
