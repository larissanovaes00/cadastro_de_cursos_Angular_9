import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.scss']
})

export class FormReativoComponent implements OnInit {

  form: FormGroup;
  cursos: [];
  isValidDate: boolean;
  formSubmitted = false;
 
  constructor( private formBuilder: FormBuilder, private route: Router ) {}
 
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      duration: ['', Validators.required], 
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      start:[null],
      end: [null],
      description: [null]
    });
  }


  // pattern="[a-zA-Z ]*"
  validateForm(field){
   return this.form.get(field).invalid && this.form.get(field).touched;
  }

  errorStyle(field){
    return{
      'label-error': this.validateForm(field)
    }
  }

  onSubmit(form){
    this.validateDate(form)
    this.cursos = JSON.parse(localStorage.getItem('curso'));
    if (!this.cursos && this.isValidDate) {
      localStorage.setItem(
        'curso',
        JSON.stringify([form.value])
      );
      this.redirect();
    } else if(this.cursos && this.isValidDate){
      const newData = [...this.cursos, form.value];
      localStorage.setItem('curso', JSON.stringify(newData));
      this.formSubmitted = true;
      this.redirect();
    }
  }

  redirect() {
    setTimeout(() => {
      this.route.navigate(['/']);
    }, 2500);
  }

  validateDate(form) {
    if (new Date(form.value.end) < new Date(form.value.start)) {
      this.form.controls['end'].setErrors({ incorrect: true });
      this.isValidDate = false;
    } else {
      this.form.controls['end'].valid;
      this.isValidDate = true;
    }
  }
}
