import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ControlValueAccessorComponent,
      multi:true
    },
  ],
})
export class ControlValueAccessorComponent
  implements OnInit, ControlValueAccessor
{
  @Input() label!: string;
  value!: string;
  onChange!:(value: string) => void;
  onTouched!:() => void;
  constructor() {}
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  ngOnInit(): void {}
}
