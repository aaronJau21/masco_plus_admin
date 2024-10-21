import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './home-layout.component.html',
})
export default class HomeLayoutComponent {}
