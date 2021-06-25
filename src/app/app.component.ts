import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLesson';
  textToChange = 'Type something here, its kinda empty';
  Alejandro = ["My name is Alejandro", "I am 14 years old", "I like to watch anime", "I enjoy outdoor activites"];
}
export class Me {
  name = 'Alejandro'
  age = '14'
  height = '5 feet, 7 inches'
}