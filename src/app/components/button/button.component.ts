import { Component } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  constructor(private toggleService: ToggleService) {}

  toggle() {
    this.toggleService.toggleCheckBox();
  }
}
