import { Component, Input, OnInit } from '@angular/core';
import { CommonAnimations } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [CommonAnimations.fadeInDownCascade],
})
export class ProjectComponent implements OnInit {
  @Input()
  isFeatured: Boolean = false;
  @Input()
  projectName: string = '';
  @Input()
  isFlipped: Boolean = false;
  @Input()
  projectUrl: string = '#';

  constructor() {}

  ngOnInit(): void {}
}
