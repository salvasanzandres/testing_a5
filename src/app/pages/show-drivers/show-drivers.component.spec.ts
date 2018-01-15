import { TestBed, async } from '@angular/core/testing';
import {ShowDriversComponent} from "./show-drivers.component";
import {DriverService} from "../../core/services/driver.service";

describe('ShowDriversComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShowDriversComponent
      ],
      providers: [
        DriverService
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(ShowDriversComponent);
    const myComp = fixture.debugElement.componentInstance;
    expect(myComp).toBeTruthy();
  }));


});
