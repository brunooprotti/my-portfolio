import { Component } from '@angular/core';
import { basics } from '@cv';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public summary: string = basics.summary;
}
