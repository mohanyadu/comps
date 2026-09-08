import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})


export class TimeDirective {
  constructor(
    private TemplateRef: TemplateRef<any>,
    private ViewContainer: ViewContainerRef) {

    }
  
    @Input('appTimes') set render(times:number){
      this.ViewContainer.clear()
      for(let i=0;i<times;i++){
        this.ViewContainer.createEmbeddedView(this.TemplateRef,{})
      }
    }


}
