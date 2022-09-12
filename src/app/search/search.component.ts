import { Component, OnInit, Query } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MsSearchService } from '../ms-search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private searchService: MsSearchService) { }
  ngOnInit(): void {
  }

  queryForm = this.formBuilder.group({
    query: ''
  })

  getResults(){
    const value = this.queryForm.value.query;
    if(value != null && value != undefined && value!=''){
      this.searchService.getSearchSuggestions(value).subscribe(
        (response)=>{
            console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      )
    }else{
      console.log("Search word(s) required!");
    }
  }
}
