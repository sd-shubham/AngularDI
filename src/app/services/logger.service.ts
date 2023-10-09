import { Injectable } from '@angular/core';
import { ImproveloggerService } from './improvelogger.service';

@Injectable({
  providedIn: 'root',
  // useClass:ImproveloggerService
})
export class LoggerService {

  constructor() { }

  logMessage = (params: string) => `old logger some message ${params}`;
}
