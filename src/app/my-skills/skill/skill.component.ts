import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }
  @Input() skill! : Skill;
  ngOnInit(): void {
  }

}
