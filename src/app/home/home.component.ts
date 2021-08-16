import { ExampleService } from './../services/example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private exampleService: ExampleService) { }

  ngOnInit(): void {
    this.exampleService.getWather().subscribe((result: any) => {
      console.log(result);
    });
  }

  hello(){
    console.log("Hello world!");
  }

}
