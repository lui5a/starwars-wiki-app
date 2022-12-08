import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { plainToInstance } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { map, Observable} from 'rxjs';
import { Person } from '../models/person';
import { NavigationService } from './navigation.service';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private navigationService: NavigationService
  ) { }


  searchPeople(queryString:string): Observable<any>{
    const url = `${this.baseUrl}people/?search=${queryString}`;

    return this.httpClient.get(url).pipe(
      map((data: any) => {
        let peopleList = plainToInstance(Person, data.results as Array<Person>);
        peopleList.forEach((person: Person) => {
          this.navigationService.getPersonPlanet(person.homeworld).subscribe(res => person.planet = res)

        });
        return peopleList;
      })
    );

  }


  searchPlanets(queryString:string): Observable<any>{
    const url = `${this.baseUrl}planets/?search=${queryString}`;

    return this.httpClient.get(url).pipe(
      map((data: any) => {
        return plainToInstance(Planet, data.results as Array<Planet>);
      })
    );
  }


}
