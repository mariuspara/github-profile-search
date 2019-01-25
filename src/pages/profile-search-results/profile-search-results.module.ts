import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results';
import { ComponentsModule } from '../../components/components.module';
import { CommonModule } from '@angular/common'


@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
    ComponentsModule,
    CommonModule
  ],
})
export class ProfileSearchResultsPageModule {}
