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

  private scoreID:any;
  public selectedScore: Score | undefined;
  

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
    this.selectedScore=this.scoreService.getScoreByID(this.scoreID);
    console.log("slected score: " + this.selectedScore);
        
    if (this.selectedScore === undefined)
    {
      console.log("Score not found!");
      return;
    }
    else
    {

      var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
        // set options here
        backend: "svg",
        drawFromMeasureNumber: 1,
        drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER // draw all measures, up to the end of the sample
      });
      osmd
        .load(this.selectedScore.path)
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

  

}
