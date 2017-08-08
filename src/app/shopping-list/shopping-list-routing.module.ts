import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
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
