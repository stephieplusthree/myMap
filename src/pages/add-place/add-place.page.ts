import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-add-place',
  templateUrl: './add-place.page.html'
})
export class AddPlacePage {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
