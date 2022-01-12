import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ScoreService} from 'src/app/services/score.service';
import { Score } from 'src/app/struct/score';


declare var opensheetmusicdisplay: any;
declare var window: any;
declare var document: any;

@Component({
  selector: 'app-score-output',
  templateUrl: './score-output.component.html',
  styleUrls: ['./score-output.component.scss']
})
export class ScoreOutputComponent implements OnInit {

  public currentScorePath:any;

  private scoreID:any;
  private selectedScore: Score[] = [];
  

  constructor(
    private route: ActivatedRoute,
    public scoreService:ScoreService
  ) {     
  }

  ngOnInit(): void {
    console.log("route is: "+ this.route);

    //get score ID the user selected
    this.scoreID=parseInt(this.route.snapshot.params['id'])
    console.log("score ID is:  " + this.scoreID);

    //get score by ID
    //this.selectedScore=this.scoreService.getScoreByID(this.scoreID);
    console.log("slected score: " + this.selectedScore);
    
    //get current score path from score ID
    this.currentScorePath=this.scoreService.getScoreByID(this.scoreID);
    console.log("current score path is: " + this.currentScorePath);
    
    
    var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
      // set options here
      backend: "svg",
      drawFromMeasureNumber: 1,
      drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER // draw all measures, up to the end of the sample
    });
    osmd
      .load("assets/musicXML/Sonata_No.16_In_C_Major_K545-Wolfgang_Amadeus_Mozart.mxl")
      .then(
        function() {
          window.osmd = osmd; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
          //console.log("e.target.result: " + e.target.result);
          console.dir(osmd);
          
          osmd.setOptions({
            drawComposer:true,
            drawPartNames:true,
            //drawCredits:false
          })
          osmd.render();
          osmd.cursor.show();
          
        }
      ); 
  }

  

}
