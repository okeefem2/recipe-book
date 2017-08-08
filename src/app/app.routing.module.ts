import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AuthGuardService} from './service/auth-guard.service';

// dynamic params come after hard routes
// loadChildren for lazy loading
const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recipes', loadChildren: './recipes/recipe.module#RecipesModule', canLoad: [AuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
      AuthGuardService
  ]
})
export class AppRoutingModule { }
