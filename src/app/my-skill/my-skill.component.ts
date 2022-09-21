import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.scss']
})
export class MySkillComponent implements OnInit {

  constructor(public skillService:SkillService) { }

  ngOnInit(): void {
    this.skillService.getSkills();
  }

}
