import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MsSearchService {

  constructor(private http: HttpClient) { }
  public getSearchSuggestions(searchTerm: string){
    const api = "https://api.bing.microsoft.com/v7.0/Suggestions?q="+searchTerm;
    
    const head = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '********************************'
    });

    return this.http.get(api, {headers: head});
  }
}
