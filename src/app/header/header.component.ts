import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService, private authService: AuthService) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorage.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorage.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
