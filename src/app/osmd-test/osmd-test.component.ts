import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osmd-test',
  templateUrl: './osmd-test.component.html',
  styleUrls: ['./osmd-test.component.scss']
})
export class OsmdTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  hello(e: any): void
  {
    console.log(e);
  }
  
}
