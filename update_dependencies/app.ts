
import {Component} from '@angular/core';
import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'UpdateDepsApp',
    template: `<h1>Test Update Dependencies!</h1>`
})
export class AppComponent {
  clicks$: Observable<{}>;

  constructor(private el: ElementRef) {
    this.clicks$ = Observable.fromEvent(el.nativeElement, 'click');
  }
}
