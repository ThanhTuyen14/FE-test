import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block6Component } from './block-6.component';

describe('Block6Component', () => {
  let component: Block6Component;
  let fixture: ComponentFixture<Block6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Block6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
