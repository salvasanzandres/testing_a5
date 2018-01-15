import {Component} from "@angular/core";

@Component({
  selector : "app-show-drivers",
  templateUrl: "show-drivers.component.html"
})

export class ShowDriversComponent{
  public title: string;
  constructor(){
    this.title = 'yo';
  }
}
