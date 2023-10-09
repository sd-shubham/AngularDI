import { Directive, Optional, Self } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ImproveloggerService } from '../app/services/improvelogger.service';
import { legacyLogger } from './services/legacyLogger.service';

@Directive({
  selector: '[appParent]',
  providers:[{
    provide: LoggerService,
    useValue: legacyLogger 
  }]
})
export class ParentDirective {

  constructor(@Optional() @Self() private srvice: LoggerService) { 
    if(srvice)
    console.log(srvice.logMessage("parent directive"))
  }

}
