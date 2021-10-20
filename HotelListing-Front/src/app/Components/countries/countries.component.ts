import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/Services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any;
  
  constructor(public countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll()
    .subscribe(
      ( data: any) => {
        this.countries = data;
        console.log(data);
      },
      ( error: any) => {
        console.log(error);
      });
  }

  



}
