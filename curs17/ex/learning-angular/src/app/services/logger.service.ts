import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';


@Injectable()
export class LoggerService {

    private loggedMessages = 0;

    private loggedMessagesSubject: ReplaySubject<number> = new ReplaySubject(1);
    public loggedMessagesSubjectStream$ = this.loggedMessagesSubject.asObservable();
    

    public logMessage(message: string){
        console.log(message);
        this.loggedMessages++;
        this.loggedMessagesSubject.next(this.loggedMessages);
    }

    public reserLoggedMessages() {
        this.loggedMessages = 0;
        this.loggedMessagesSubject.next(this.loggedMessages);
    }

}