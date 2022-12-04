import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  planets: any = null;

  constructor( private navigationService: NavigationService) { }

  ngOnInit(): void {

    this.navigationService.getPlanets().subscribe((res) => {
      this.planets = res;
    })
  }

  goToDetail(url: string){
    return url.replace(/\/$/, '').split('/').pop();
  }
}


