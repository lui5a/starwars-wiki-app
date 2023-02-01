import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { plainToInstance } from 'class-transformer';
import { environment } from 'src/environments/environment';
import { forkJoin, map, mergeMap, Observable, tap} from 'rxjs';
import { Person } from '../models/person';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  baseUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  // getPeople(): Observable<any>{
  //   const url = `${this.baseUrl}people`;

  //   return this.httpClient.get(url).pipe(
  //     map((data: any) => {
  //       let peopleList = plainToInstance(Person, data.results as Array<Person>);
  //       peopleList.map((person: Person) => {
  //         this.getPersonPlanet(person.homeworld).subscribe((res) => {
  //           console.log(res)
  //           person.planet = res
  //           return person as Person;
  //         })
  //         return peopleList
  //       });
  //     })
  //   );

  // }


  getPeople(): Observable<any>{
    const url = `${this.baseUrl}people`;

    return this.httpClient.get(url).pipe(
      mergeMap((data: any) => {
        console.log(data.results)
        let peopleList = plainToInstance(Person, data.results as Array<Person>);
        peopleList[0].hello()
        console.log(peopleList)
        // var result = [];
        // peopleList.forEach((item) => {
        //   result.push(item)
        // })
        // return result

        // var result = peopleList.map((item) => {
        //   return item as Person
        // })

        return forkJoin(
          peopleList.map((person: Person) => {
            return this.getPersonPlanet(person.homeworld).pipe(
              map((res) => {
                person.planet = res;
                return person as Person;
              })
            );
          })
        );
      })
    );
  }





  getPlanets(): Observable<any>{
    const url = `${this.baseUrl}planets`;

    return this.httpClient.get(url).pipe(
      map((data: any) => {
        return plainToInstance(Planet, data.results as Array<Planet>);
      })
    );
  }

  getPlanetDetail(planetId:string): Observable<any>{
    const url = `${this.baseUrl}planets/`;

    return this.httpClient.get(url+planetId).pipe(
      map((data: any) => {
        return plainToInstance(Planet, data as Planet);
      })
    );
  }

  getPersonDetail(planetId:string): Observable<any>{
    const url = `${this.baseUrl}people/`;

    return this.httpClient.get(url+planetId).pipe(
      map((data: any) => {
        let person = plainToInstance(Person, data as Person);
        this.getPersonPlanet(person.homeworld).subscribe( res => person.planet = res)
        return person as Person;
      })
    );
  }

  getPersonPlanet(planetUrl: string){

    return this.httpClient.get(planetUrl).pipe(
      map((data: any) => {
        return  data as Planet;
      })
    );

  }



}
