import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

// https://medium.com/@amcdnl/global-error-handling-with-angular2-6b992bdfb59c
// import { LoggingService } from '../services';
// import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error) {

    // const loggingService = this.injector.get(LoggingService);
    // const location = this.injector.get(LocationStrategy);
    //
    // const message = error.message ? error.message : error.toString();
    //
    // // URL 라우팅 문자열 처리전략
    // const url = location instanceof PathLocationStrategy ? location.path() : '';
    //
    // // get the stack trace, lets grab the last 10 stacks only
    // StackTrace.fromError(error).then(stackframes => {
    //   const stackString = stackframes
    //     .splice(0, 20)
    //     .map(function(sf) {
    //       return sf.toString();
    //     }).join('\n');
    //
    //   // log on the server
    //   loggingService.log({ message, url, stack: stackString });
    // });

    throw error;
  }

}