import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementHomeComponent } from './element-home/element-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimeDirective } from './time.directive';


@NgModule({
  declarations: [
    ElementHomeComponent,
    PlaceholderComponent,
    TimeDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports:[
    ElementHomeComponent
  ]
})
export class ElementsModule { }
