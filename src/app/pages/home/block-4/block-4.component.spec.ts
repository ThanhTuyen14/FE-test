import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block4Component } from './block-4.component';

describe('Block4Component', () => {
  let component: Block4Component;
  let fixture: ComponentFixture<Block4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Block4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
