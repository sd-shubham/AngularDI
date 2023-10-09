import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';
import { ContentComponent } from './content/content.component';
import { CardComponent } from './content/ng-content/card.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './control-value-accessor/form/from.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentDirective,
    ChildDirective,
    ContentComponent,
    CardComponent,
    ViewProviderComponent,
    DynamicComponent,
    ControlValueAccessorComponent,
    FormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
