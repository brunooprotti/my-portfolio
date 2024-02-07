import { Component } from '@angular/core';
import { education } from '@cv';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public titleWork: string = education.titleSection;
  public listEducations = education.listEducations;


  public takeStartDate(date: string): number {
    return new Date(date).getUTCFullYear();
  }
  public takeEndDate(date: string | undefined): number | string{
    return date !== undefined  ? ` - ${new Date(date).getUTCFullYear()}` : "";
  }
}
