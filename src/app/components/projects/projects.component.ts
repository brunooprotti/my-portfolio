import { Component } from '@angular/core';
import { Project } from '../../models/Project';
import { projects } from '@cv';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public title: string = projects.titleSection
  public projects: Project[] = projects.listProjects;
}
