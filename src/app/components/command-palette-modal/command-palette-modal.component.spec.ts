import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPaletteModalComponent } from './command-palette-modal.component';

describe('CommandPaletteModalComponent', () => {
  let component: CommandPaletteModalComponent;
  let fixture: ComponentFixture<CommandPaletteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandPaletteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandPaletteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
