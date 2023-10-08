import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { IonicSelectableComponent } from "../components/ionic-selectable/ionic-selectable.component";
import { Observable } from "rxjs";
import { DataService } from "../services/data.service";

export interface IMockData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

@Component({
  selector: "app-home",
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Use cases</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-item lines="full">
        <ion-label class="ion-text-wrap">
          Basic usage.
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Mutiple Selection with searching</ion-label>
        <ionic-selectable
          [hasVirtualScroll]="true"
          [isMultiple]="true"
          [items]="$any(mockData$ | async)"
          itemValueField="id"
          itemTextField="last_name"
          [canSearch]="true"
        >
        </ionic-selectable>
      </ion-item>
    </ion-content>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, IonicSelectableComponent],
  providers: [DataService]
})
export class HomePage {
  mockData$: Observable<IMockData[]> = this.dataService.getData();
  constructor(private dataService: DataService) { }
}
