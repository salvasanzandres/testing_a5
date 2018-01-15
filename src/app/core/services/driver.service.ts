import {IDriverService} from "./contracts/driver.service";
import {Driver, DRIVERS} from "../models/driver";
import {Injectable} from "@angular/core";

@Injectable()
export class DriverService implements IDriverService{
private drivers: Array<Driver> = DRIVERS;

  getDrivers(): Array<Driver>{
    return this.drivers;
  }

  getDriver(driverId: number ): Driver{
    return null
  }
}
