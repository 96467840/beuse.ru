import { Component, Input } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  // можно передавать и сам колбэк, но тогда придется его забиндить на шаблоне (при передаче) на главный компонент
  //@Input() logout: () => void;
  @Input() app: AppComponent;

  onLogout(): void {
    this.app.onLogout();
  }
}
