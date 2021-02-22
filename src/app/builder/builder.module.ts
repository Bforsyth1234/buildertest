import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuilderPageRoutingModule } from './builder-routing.module';

import { BuilderPage } from './builder.page';
import { BuilderModule } from '@builder.io/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuilderPageRoutingModule,
    BuilderModule.forRoot('ffb685b46c7d4c7b837ecf3db24885d4')
  ],
  declarations: [BuilderPage]
})
export class BuilderPageModule {}
