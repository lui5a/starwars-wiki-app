import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  planetId: any;
  planetDetails: any;

  constructor(protected activated: ActivatedRoute, private navigationService: NavigationService) {
    this.activated.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
          this.planetId =  paramMap.get('id')
      }
    });
  }

  ngOnInit(): void {

  this.navigationService.getPlanetDetail(this.planetId).subscribe((res)=> {
    this.planetDetails = res;
  })


  }




}
