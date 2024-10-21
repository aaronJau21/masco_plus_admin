import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../../app.routes';

import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-64 border-r border-white h-screen p-5',
  },
})
export class NavbarComponent implements OnInit {
  items: Routes | undefined = [];
  itemsNav = '';

  ngOnInit(): void {
    this.getTitleItems();
  }

  getTitleItems() {
    this.items = routes[1].children?.filter((route) => {
      if (route.path?.includes(':')) return;
      if (!route.title) return;

      return route;
    });
  }
}
