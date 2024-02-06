import { Component } from '@angular/core';
import { skills } from '@cv';
import { Skill } from '../../models/Skill';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public title : string = skills.titleSection;

  public skills: Skill[] = skills.listSkills;
}
