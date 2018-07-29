import { Injectable } from '@angular/core';
//  importing http client to make request
import { HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable, forkJoin } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ViewserviceService {
public currentitem;
// public getAllData;
public books = 'https://anapioficeandfire.com/api/books';
public houses = 'https://anapioficeandfire.com/api/houses';
public characters = 'https://anapioficeandfire.com/api/characters' 
  constructor(private _http: HttpClient) { 
    console.log ('service is called')
  }
  public getallhouses():any{
    let houses = this._http.get(this.houses);
    console.log(houses);
    return houses;
  }
  public getallcharacters():any{
    let characters = this._http.get(this.characters);
    return characters
  }
  public getallbooks():any{
    let books=this._http.get(this.books);
    return books; 
 }
 public getAllData():any {
  return forkJoin(this._http.get(this.books), this._http.get(this.characters),
  this._http.get(this.houses));
 }
  public getSingleData(url):any{
    let details=this._http.get(url);
    console.log(details+"Details");
    return details;

}
}
