import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'my-local-app';

  @ViewChild('components', { read: ViewContainerRef })
  componentsContainer!: ViewContainerRef;

  /**
   *
   */
  constructor() {}

  ngOnInit(): void {
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Components',
    }).then((components) => {
      const { MfeStandaloneComponent, MyButtonComponent } = components;
      this.componentsContainer.createComponent(MfeStandaloneComponent);
      const { instance } =
        this.componentsContainer.createComponent(MyButtonComponent);
      (instance as any).text = 'Test Button';
      (instance as any).log();
      console.log(instance);
    });

    // import('componentLib/Components').then((components) => {
    //   const { MfeStandaloneComponent, MyButtonComponent } = components;
    //   this.componentsContainer.createComponent(MfeStandaloneComponent);
    //   const { instance } =
    //     this.componentsContainer.createComponent(MyButtonComponent);
    //   (instance as any).text = 'Test Button';
    //   (instance as any).log();
    //   console.log(instance);
    // });
  }
}
