import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';
import { ShoppingListService } from '../../service/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/subscription';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') shoppingListForm: NgForm; // reference to the form
  subscription: Subscription;
  editMode = false;
  editingIndex: number;
  editingItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingIndex = index;
        this.editingItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editingItem.name,
          amount: this.editingItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    // const ingName: string = this.nameInputRef.nativeElement.value;
    // const ingAmount: number = this.amountInputRef.nativeElement.value;
    // this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
    // get new ingredient from form, update if editing, add new if not
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editingIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editingIndex);
    this.onClear();
  }
}
