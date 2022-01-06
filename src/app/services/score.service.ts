import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scores = [
    {"id":1, "name": "Moonlight", "composer":"L.V Beethoven", "instru":"Piano","path": "src/assets/musicXML/Sonate_No._14_Moonlight_1st_Movement.mxl"},
    {"id":2, "name": "K545", "composer":"W.A Mozart","instru":"Piano","path":"src/assets/musicXML/Sonata_No.16_In_C_Major_K545-Wolfgang_Amadeus_Mozart.mxl"},
  ]

  constructor() { }

  getScoreByIndex(value: number)
  {
    return this.scores[value];
  }

  getScoreByID(value: number)
  {
    return this.scores.find(s => s.id == value);
  }
}
