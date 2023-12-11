import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRauquenComponent } from './home-rauquen.component';

describe('HomeRauquenComponent', () => {
  let component: HomeRauquenComponent;
  let fixture: ComponentFixture<HomeRauquenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRauquenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeRauquenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
