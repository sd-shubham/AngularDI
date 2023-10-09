import {Injectable} from '@angular/core';
import { MultiTrueUseCase } from '../config/app.config';

@Injectable({
    providedIn:'root'
})
export class Sample2 implements MultiTrueUseCase{
    name: string = "default name";
display () {
    console.log(`calling from ${this.name}`)
}
}