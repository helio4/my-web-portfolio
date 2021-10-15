import { Component, OnInit } from '@angular/core';
import { CommonAnimations } from 'src/app/shared/shared.module';
import { HeroDesignAnimations } from 'src/app/shared/shared.module';


@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [
    CommonAnimations.hover,
    CommonAnimations.fadeInDownCascade,
    HeroDesignAnimations.l1lr,
    HeroDesignAnimations.l1ud,
    HeroDesignAnimations.l2lr,
    HeroDesignAnimations.l2ud,
    HeroDesignAnimations.s2lr,
    HeroDesignAnimations.s2ud,
    HeroDesignAnimations.l3lr,
    HeroDesignAnimations.l3ud,
    HeroDesignAnimations.fadeInUp
  ]
})
export class HeroSectionComponent implements OnInit {

  isDown: Boolean = true;
  isDown2: Boolean = true;
  startAnimSequence: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.startAnimSequence = true}, 400)
  }

}
