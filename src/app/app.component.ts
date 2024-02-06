import { Component,  EventEmitter,  HostListener, Output, TemplateRef, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommandPaletteModalComponent } from './components/command-palette-modal/command-palette-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'my-portfolio';
  isModalOpen:boolean = false;

  constructor(public dialog: MatDialog) {}

  @HostListener('document:keydown.control.p', ['$event'])
  public print(e?: Event) : void {
    e?.preventDefault();
    window.print();
  }

  @HostListener('document:keydown.control.k', ['$event'])
  public openCommandsPalette(e: Event) : void {
    e.preventDefault();

    if (this.isModalOpen) return; //Esto es para que no se abra mas de una instancia

    const dialogRef = this.dialog.open(CommandPaletteModalComponent);
    this.isModalOpen = true;

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        this.print();
      }
      this.isModalOpen = false;
    });

  }
}
