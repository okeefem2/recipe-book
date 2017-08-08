import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuardService } from '../service/auth-guard.service';
// dynamic params come after hard routes
const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
  ]},
];

// only forRoot in the app module
// authGuard is only used in this module, so this service is provided here!
// guards are the only services that should be loaded in a routing module
// services only provided below the root/core module if only used in one module.
// in this one, the child injector will inject the service! since this is a lazily loaded module.
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {}
