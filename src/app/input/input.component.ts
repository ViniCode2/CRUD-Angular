import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../modal/modal.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: ModalService) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      // states: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      address: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      cell: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(16)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      password: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]]
    });

  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso')
      );
    }
  }

  createInput(){
    window.location.reload();
  }

}
