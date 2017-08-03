import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bind the class .open to the element
  // this directive is attached to
  @HostBinding('class.open') isOpen: boolean = false;

  // when the element this directive is attached to
  // is clicked, switch the Host bound property
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
