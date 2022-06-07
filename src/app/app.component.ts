import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  getInputValue(value : string)
  {
    this.enteredText = value;
    console.log(this.randomText.split(''));
    
  }

  compare(randomLetter : string, enteredLetter: string) {
    console.log(randomLetter, enteredLetter);
    if(!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'

  }


}
