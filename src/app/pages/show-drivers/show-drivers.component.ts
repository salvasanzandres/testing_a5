import {Component} from "@angular/core";
import {DriverService} from "../../core/services/driver.service";
import {Driver} from "../../core/models/driver";

@Component({
  selector : 'app-show-drivers',
  templateUrl: 'show-drivers.component.html'
})

export class ShowDriversComponent{
  public title: string;
  public drivers: Array<Driver>;

  constructor(private driverService: DriverService){
    this.title = 'yo';
    this.drivers = this.driverService.getDrivers();
  }
}
