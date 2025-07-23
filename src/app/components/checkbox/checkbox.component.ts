import { Component, Inject, OnInit } from '@angular/core';
import { ToggleService } from '../../services/toggle.service';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent implements OnInit {
  isChecked: boolean = false;
  constructor(private toggleService: ToggleService) {}

  ngOnInit(): void {
    this.getValue();
  }

  getValue() {
    this.toggleService.isChecked.subscribe((value) => {
      this.isChecked = value;
    });
  }
}
