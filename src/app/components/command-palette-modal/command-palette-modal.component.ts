import { Component, HostListener, Inject } from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { basics } from '@cv';
import { Profile } from '../../models/Profile';
import { DomSanitizer } from '@angular/platform-browser';
import { actions } from '@commandActions';
import { Action } from '../../models/Action';


@Component({
  selector: 'app-command-palette-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule
  ],
  templateUrl: './command-palette-modal.component.html',
  styleUrl: './command-palette-modal.component.css'
})
export class CommandPaletteModalComponent {

  public profiles:Profile[] = basics.profiles;
  public actionList:Action[] = actions;

  constructor(
    public dialogRef: MatDialogRef<CommandPaletteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, //DialogData,
    public sanitizer: DomSanitizer
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  @HostListener('document:keydown.control.p', ['$event'])
  public printCV(e?: Event) : void  {
    e?.preventDefault();
    this.dialogRef.close("Imprimir");
  }

  @HostListener('document:keydown', ['$event'])
  public openRedSocial(e: KeyboardEvent) : Window | null {
    if (e.ctrlKey && e.key !== 'Control'){
      e.preventDefault();
      const red = this.profiles.find(profile => profile.command.includes(e.key.toUpperCase()))?.url;
      this.dialogRef.close();
      return red !== undefined ? window.open(red,'_blank') : null;
    }
    return null;
  }


}
