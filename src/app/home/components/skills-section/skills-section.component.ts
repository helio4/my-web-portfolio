import { Component, OnInit } from '@angular/core';
import { CommonAnimations } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
  animations: [CommonAnimations.fadeInDownCascade],
})
export class SkillsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
