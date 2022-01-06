import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreImportComponent } from './components/score-import/score-import.component';
import { ScoreOutputComponent } from './components/score-output/score-output.component';
import { ScoreSelectorComponent } from './components/score-selector/score-selector.component';
import { OsmdTestComponent } from './osmd-test/osmd-test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    // Default page
    path: '',
    redirectTo:'/osmdTest',pathMatch:'full'
  },
  {
    path: 'osmdTest',
    component: OsmdTestComponent
  },

  {
    path: 'score-selector',
    // component: ScoreSelectorComponent,
    children: [
      {
        path: '',
        component: ScoreSelectorComponent
      },
      {
        path: ':id',
        component: ScoreOutputComponent
      }
    ]
  },

  {
    path: 'score-import',
    component: ScoreImportComponent
  },

  { // ALWAYS  AT THE BOTTOM
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// from yt vid - https://www.youtube.com/watch?v=Nehk4tBxD4o
export const rountingComponents = [OsmdTestComponent,ScoreSelectorComponent,ScoreImportComponent,ScoreOutputComponent,PageNotFoundComponent]
