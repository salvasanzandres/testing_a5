import {Driver} from "../../models/driver";

export interface IDriverService{
  getDrivers(): Array<Driver>;
  getDriver(id: number): Driver;
}
