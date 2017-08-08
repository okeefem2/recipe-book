import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RecipesModule} from './recipes/recipes.module';


// dynamic params come after hard routes
// loadChildren for lazy loading
const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuardService] }
];

// preload all lazy loaded modules as the app is being used.
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers: [
      AuthGuardService
  ]
})
export class AppRoutingModule { }
