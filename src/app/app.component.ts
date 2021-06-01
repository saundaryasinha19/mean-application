import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts= [];
  title= "mean-application"
  OnPostAdded(post) {
    this.storedPosts.push(post);
  }
}
