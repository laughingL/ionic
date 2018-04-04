import { Component } from '@angular/core';
/**
 * Generated class for the QuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question',
  templateUrl: 'question.html'
})
export class QuestionComponent {

  text: string;

  constructor() {
    console.log('Hello QuestionComponent Component');
    this.text = 'Hello World';
  }

}
