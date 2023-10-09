import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImproveloggerService {

  constructor() { }
  logMessage = (params: string) => `improve logger message ${params}`;
}
