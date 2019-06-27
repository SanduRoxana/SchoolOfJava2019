import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable()
export class LoggerService {

  private loggedMessages = 0;

  private loggedMessagesSubject: ReplaySubject<number> = new ReplaySubject(1);
  public loggedMessagesSubject$ = this.loggedMessagesSubject.asObservable();

  public logMessage(message: string) {
    console.log(message);
    this.loggedMessages++;
    this.loggedMessagesSubject.next(this.loggedMessages);
  }

  public resetLoggedMessages() {
    this.loggedMessages = 0;
    this.loggedMessagesSubject.next(this.loggedMessages);

  }

}
