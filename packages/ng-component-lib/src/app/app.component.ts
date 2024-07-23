import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButtonComponent } from './mfe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng component lib';
}
