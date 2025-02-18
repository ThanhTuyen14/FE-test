import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Block5Component } from './block-5.component';

describe('Block5Component', () => {
  let component: Block5Component;
  let fixture: ComponentFixture<Block5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Block5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Block5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
