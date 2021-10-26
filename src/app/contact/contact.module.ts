import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [ContactPageComponent],
})
export class ContactModule {}
