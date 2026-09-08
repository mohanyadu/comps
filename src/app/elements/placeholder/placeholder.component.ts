import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit{
@Input() header= true
@Input() line:number = 5;

constructor(){}
ngOnInit(){}
}
