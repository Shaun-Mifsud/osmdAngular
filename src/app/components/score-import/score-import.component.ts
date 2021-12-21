import { Component, OnInit } from '@angular/core';

declare var window: any;
declare var document: any;
declare var opensheetmusicdisplay: any;

@Component({
  selector: 'app-score-import',
  templateUrl: './score-import.component.html',
  styleUrls: ['./score-import.component.scss']
})
export class ScoreImportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("files").addEventListener("change", this.handleFileSelect, false);
  }

  handleFileSelect(evt: any): void {
    var maxOSMDDisplays = 2; // how many scores can be displayed at once (in a vertical layout)
    var files = evt.target.files; // FileList object
    var osmdDisplays = Math.min(files.length, maxOSMDDisplays);

    var output = [];
    for (var i=0, file = files[i]; i<osmdDisplays; i++) {
      output.push("<li><strong>", escape(file.name), "</strong> </li>");
      output.push("<div id='osmdCanvas" + i + "'/>");
    }

    //document.getElementById("list").innerHTML = "<ul>" + output.join("") + "</ul>";
    document.getElementById("list").innerHTML;

    for (var i=0, file = files[i]; i < osmdDisplays; i++) {
      if (!file.name.match('.*\.xml') && !file.name.match('.*\.musicxml') && false) {
        alert('You selected a non-xml file. Please select only music xml files.');
        continue;
      }

      var reader = new FileReader();

      reader.onload = function(e: any) {
          var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("osmdCanvas", {
            // set options here
            backend: "svg",
            drawFromMeasureNumber: 1,
            drawUpToMeasureNumber: Number.MAX_SAFE_INTEGER // draw all measures, up to the end of the sample
          });
          osmd
            .load(e.target.result)
            .then(
              function() {
                window.osmd = osmd; // give access to osmd object in Browser console, e.g. for osmd.setOptions()
                //console.log("e.target.result: " + e.target.result);
                osmd.render();
                osmd.cursor.show(); // this would show the cursor on the first note
                //osmd.cursor.next(); // advance the cursor one note
              }
            );
      };

      if (file.name.match('.*\.mxl')) {
        // have to read as binary, otherwise JSZip will throw ("corrupted zip: missing 37 bytes" or similar)
        reader.readAsBinaryString(file);
      } 

      else {
        reader.readAsText(file);
      }
    }
  }

    hello(e: any): void
    {
      console.log(e);
    }

}
