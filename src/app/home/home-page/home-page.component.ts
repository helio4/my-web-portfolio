import { Component, OnInit } from '@angular/core';
import { CommonAnimations } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [CommonAnimations.fadeInDownCascade],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
