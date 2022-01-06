import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var opensheetmusicdisplay: any;
declare var window: any;
declare var document: any;

@Component({
  selector: 'app-score-output',
  templateUrl: './score-output.component.html',
  styleUrls: ['./score-output.component.scss']
})
export class ScoreOutputComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(parseInt(this.route.snapshot.params['id']));
    console.log(this.route);
    
     var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
      // set options here
      backend: "svg",
      drawFromMeasureNumber: 1,
      drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER // draw all measures, up to the end of the sample
    });
    osmd
      .load("assets/musicXML/Sonate_No._14_Moonlight_1st_Movement.mxl")
      .then(
        function() {
          window.osmd = osmd; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
          //console.log("e.target.result: " + e.target.result);
          osmd.render();
          osmd.cursor.show(); // this would show the cursor on the first note
          //osmd.cursor.next(); // advance the cursor one note
        }
      ); 
  }

}
