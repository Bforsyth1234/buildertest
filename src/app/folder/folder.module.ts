import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { BuilderModule } from '@builder.io/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    BuilderModule.forRoot('ffb685b46c7d4c7b837ecf3db24885d4')
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
