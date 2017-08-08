import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { AuthGuardService } from '../service/auth-guard.service';
// dynamic params come after hard routes
const shoppingListRoutes: Routes = [
  {path: 'shopping-list', component: ShoppingListComponent},
];

// only forRoot in the app module
@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutingModule {}
