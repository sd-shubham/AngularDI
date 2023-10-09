import {Injectable} from '@angular/core';
import { MultiTrueUseCase } from '../config/app.config';

@Injectable()
export class Sample1 implements MultiTrueUseCase{
name: string = "SAMPLE 1.."
display () {
    console.log(`calling from ${this.name}`)
}
}