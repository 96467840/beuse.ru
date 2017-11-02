import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  @Input() app: AppComponent;

  onLogout(): void {
    this.app.onLogout();
  }
}
