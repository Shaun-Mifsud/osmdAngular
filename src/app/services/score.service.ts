import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Score } from 'src/app/struct/score';
import { SCORE } from '../struct/scores.data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public score: Score[] = [];  

  constructor(
    private storageService: StorageService
  ) { }

  async init()
  {
    this.score = await this.storageService.get('score') || SCORE;
  }

  getScoreByIndex(indexValue: number)
  {
    return this.score[indexValue];
  }

  getScoreByID(IDvalue: number)
  {
    return this.score[IDvalue];
    //return this.score.find(s => s.id == IDvalue);
  }

}
