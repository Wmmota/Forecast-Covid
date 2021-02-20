import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Country } from './country-list.inferfaces';
import { CountryListService } from './country-list.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countryList: Country[] = [];
  isLoading: boolean = false;
  isError: boolean = false;



  constructor(private countryListService: CountryListService) { }

  ngOnInit(): void {
    this.loadList()
      
  }


  loadList() {
    this.isLoading = true;
    this.isError = false;

    this.countryListService.getCountryList()
    .pipe(
      take(1)
    ).subscribe(
        response => { this.onSuccess(response) },
        error => { this.onError(error) }
      )
  }

  onSuccess(response: Country[]) {
      this.isLoading = false;
      this.isError = false;
      console.log(response)
      this.countryList = response;
  }

  onError(error: any) {
      this.isLoading = false;
      this.isError = true;
      console.log(error);
  }
}