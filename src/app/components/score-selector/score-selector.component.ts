import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from  '@angular/router';

declare var opensheetmusicdisplay: any;
declare var window: any;
declare var document: any;

@Component({
  selector: 'app-score-selector',
  templateUrl: './score-selector.component.html',
  styleUrls: ['./score-selector.component.scss']
})
export class ScoreSelectorComponent implements OnInit {

  scores = [
    {"id":1, "name": "Moonlight", "composer":"L.V Beethoven", "instru":"Piano","path": "src/assets/musicXML/Sonate_No._14_Moonlight_1st_Movement.mxl"},
    {"id":2, "name": "K545", "composer":"W.A Mozart","instru":"Piano","path":"src/assets/musicXML/Sonata_No.16_In_C_Major_K545-Wolfgang_Amadeus_Mozart.mxl"},
  ]
  
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe(nav => {
      if (nav instanceof NavigationEnd)
      {
        console.log("Link changed.");
        
      }
    })
  }

  onSelect(score:any){
    score+=1;
    console.log("Score ID = " , score);
    this.router.navigate(['/score-output',score.id]);
  }

}
