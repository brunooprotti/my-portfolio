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


  public calculateTime(startDate: string, endDate: string | null, nombreEmpresa: string) : string {
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate ?? new Date());

    let yearDiff = parsedEndDate.getUTCFullYear() - parsedStartDate.getUTCFullYear();
    let monthDiff = parsedEndDate.getUTCMonth() - parsedStartDate.getUTCMonth();

    if (monthDiff < 0) {
        yearDiff -=  1;
        monthDiff += 12;
    }

    return this.generatedMessage(yearDiff,monthDiff);
  }

  private generatedMessage(yearDiff: number, monthDiff: number): string
  {
    let parts = [];

    if (yearDiff > 0) {
        parts.push(`${yearDiff} año${yearDiff > 1 ? 's' : ''}`);
    }

    if (monthDiff > 0) {
        parts.push(`${monthDiff} mes${monthDiff > 1 ? 'es' : ''}`);
    }

    return parts.join(" y ") || "0 meses";
  }

  public takeStartDate(date: string): number {
    return new Date(date).getUTCFullYear();
  }
  public takeEndDate(date: string | null): number | string{
    return date !== null  ? new Date(date).getUTCFullYear() : "Actualidad";
  }
}
