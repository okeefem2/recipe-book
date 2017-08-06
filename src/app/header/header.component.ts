import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {}

  ngOnInit() {}

  onSaveData() {
    this.dataStorage.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    
  }
}
