import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashboardComponent, NavbarComponent]
})
export class AppComponent {
  title = 'api_pokemon';
}
