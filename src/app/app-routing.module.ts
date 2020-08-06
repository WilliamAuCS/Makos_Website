import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { HomeComponent } from './modules/home/home.component';
import { DIYKitsComponent } from './modules/diy-kits/diy-kits.component';
import { EducationComponent } from './modules/education/education.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MyAccountComponent } from './modules/my-account/my-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  //{ path: '', redirectTo: '/events', pathMatch: 'full' },

  { path: 'Gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  // DISABLED FOR INITIAL DEPLOY
  // { path: 'About', component: AboutComponent },
  // { path: 'DIY_Kits', component: DIYKitsComponent },
  // { path: 'Education', component: EducationComponent },
  { path: 'register', component: RegisterComponent },
  { path: "myAccount", component: MyAccountComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
