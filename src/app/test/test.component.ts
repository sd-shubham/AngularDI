import { Component, Inject, Injector, OnInit, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { APP_CONFIG, AppConfig, MultiTrueUseCase, Multi_True_Test } from '../config/app.config';
import { ImproveloggerService } from '../services/improvelogger.service';
import { legacyLogger } from '../services/legacyLogger.service';
import { Sample1 } from '../services/sample1.service';
import { Sample2 } from '../services/sample2.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[Sample1,{
    provide: LoggerService,
    // useFactory: (config:AppConfig) =>{ 
    //   return config.isNewLoggerEnable ? new LoggerService()
    //                                   : new ImproveloggerService()
    // },
    useFactory: (injector: Injector) => {
      return injector.get(APP_CONFIG).isNewLoggerEnable ?
             injector.get(LoggerService):
             injector.get(ImproveloggerService)
    },
    // better way to use it use Injector
   // deps:[APP_CONFIG]
   deps:[Injector],
   multi: true
  },
  {
    provide: LoggerService,
    useValue: legacyLogger,
    multi:true
   },
  //,{
  //   provide: Multi_True_Test,
  //   useExisting: Sample1,
  //   multi: true
  // },
  //   {
  //     provide: Multi_True_Test,
  //     useExisting: Sample2,
  //     multi: true
  //   },
    // {
    //   provide: Sample1,
    //   useClass: Sample2
    // }
  ],
  // viewProviders:[{
  //   provide: Sample1,
  //     useClass: Sample2
  // }]
})
export class TestComponent implements OnInit {

   private loggerService: LoggerService = inject(LoggerService);
   //private improvedLoggerService = inject(ImproveloggerService);
   //appConfig = inject(@Inject(APP_CONFIG)AppConfig)
  constructor(@Inject(APP_CONFIG)private config: AppConfig,
              // @Inject(Multi_True_Test) private values: ReadonlyArray<MultiTrueUseCase>,
              private srv: Sample1) { }

// Resolution Modifier
// @Optional 
// @Self

  ngOnInit(): void {
    this.srv.name = "Test Component";
    this.srv.display();
   console.log(this.loggerService);
   //console.log(this.improvedLoggerService.logMessage("improved"));
   console.log(this.config)
  //  this.values.forEach(x => {
  //   x.display();
  //  })
  }

}
