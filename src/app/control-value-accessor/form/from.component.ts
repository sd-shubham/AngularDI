import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector:'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit{
    form!: FormGroup;
    constructor(private fb: FormBuilder ){
    }
    ngOnInit(): void {
        this.form = this.fb.group({
            name: ['']
        })
    }

}