import { Component } from '@angular/core';
import { work } from '@cv';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public titleWork: string = work.titleSection;
  public listExperience = work.experience;


  public takeStartDate(date: string): number {
    return new Date(date).getUTCFullYear();
  }
  public takeEndDate(date: string | null): number | string{
    return date !== null  ? new Date(date).getUTCFullYear() : "Actualidad";
  }
}
