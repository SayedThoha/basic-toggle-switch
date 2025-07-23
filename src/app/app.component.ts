import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [CheckboxComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toggleCheckBox';
}
