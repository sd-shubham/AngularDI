import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  // {
  //   path:'test',
  //   component: TestComponent,
  // },{
  //   path:'content',
  //   component: ContentComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
