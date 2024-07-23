import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyButtonComponent implements OnInit, AfterViewInit {
  @Input() text: string = 'Test';

  ngOnInit(): void {
    console.log('Life cycle: OnInit');
  }

  log(): void {
    console.log('Function has been called');
  }

  handleButtonClick(): void {
    console.log('The button was clicked');
  }

  ngAfterViewInit(): void {
    console.log('component-button', document.getElementById('button'));
  }
}
