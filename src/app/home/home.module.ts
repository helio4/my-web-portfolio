import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { SharedModule } from '../shared/shared.module';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { ProjectComponent } from './components/project/project.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
    HeroSectionComponent,
    SkillsSectionComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
