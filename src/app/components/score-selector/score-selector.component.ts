import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from  '@angular/router';
import { ScoreService } from 'src/app/services/score.service';
import { Score } from 'src/app/struct/score';

declare var opensheetmusicdisplay: any;
declare var window: any;
declare var document: any;

@Component({
  selector: 'app-score-selector',
  templateUrl: './score-selector.component.html',
  styleUrls: ['./score-selector.component.scss']
})
export class ScoreSelectorComponent implements OnInit {

  constructor(
    private router:Router,
    public scoreService: ScoreService){}

  ngOnInit(): void {
    this.router.events.subscribe(nav => {
      if (nav instanceof NavigationEnd)
      {
        console.log("Link changed.");
        
      }
    });


  }

  onSelect(score:any){
    score+=1;
    console.log("Score ID = " , score);
    this.router.navigate(['/score-output',score.id]);
  }

}
