import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app.routing.module';
import {RecipeService} from '../service/recipe.service';
import {ShoppingListService} from '../service/shopping-list.service';
import {DataStorageService} from '../shared/service/data-storage.service';
import {AuthService} from '../service/auth.service';
// shared module for dropdown, routing for header routing
// export the things being used in root component
@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [RecipeService, ShoppingListService, DataStorageService, AuthService]
})
export class CoreModule {}
