import { Component } from '@angular/core';

@Component({ // Decorator - Add extra meta data
  selector: 'app-header', // Name of root component
  standalone: true, // Recommanded. VS module-based
  imports: [],
  // template: '<h1>Hello World</h1>',
  templateUrl: './header.component.html',
  // styleUrls: [],
  // styles: ['h1 {color: red}'],
  styleUrl: './header.component.css'
})

export class HeaderComponent{}
