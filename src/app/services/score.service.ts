import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Score } from 'src/app/struct/score';
import { SCORES } from '../struct/scores.data';
//import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public score: Score[] = SCORES;  

  constructor(
    //private storageService: StorageService
  ) { }

  getScoreByIndex(indexValue: number)
  {
    return this.score[indexValue];
  }

  getScoreByID(IDvalue: number): Score | undefined
  {
    return this.score.find(s => s.id == IDvalue);
  }

}
