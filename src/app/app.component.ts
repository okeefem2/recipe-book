import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD6cl62m8yTqXPETKI7LxmNFehycJVJR0Y",
      authDomain: "receipe-book-727d0.firebaseapp.com"
    });
  }
}
