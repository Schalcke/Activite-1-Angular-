import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog application';

  posts = [
    {
      title: 'OH-HUM my first post !',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'This is a new post !',
      content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Words of the end !',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}


