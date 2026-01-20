import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MenubarModule,
    ButtonModule,
    AvatarModule,
    SidebarModule,
    RippleModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'layout-wrapper'
  }
})
export class LayoutComponent {
  protected readonly sidebarVisible = signal(false);
  protected readonly menuItems: readonly MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard'
    },
    {
      label: 'Achievements',
      icon: 'pi pi-star',
      items: [
        {
          label: 'View All',
          icon: 'pi pi-list',
          routerLink: '/achievements'
        },
        {
          label: 'Add New',
          icon: 'pi pi-plus',
          routerLink: '/achievements/new'
        }
      ]
    },
    {
      label: 'Timeline',
      icon: 'pi pi-clock',
      routerLink: '/timeline'
    },
    {
      label: 'Reports',
      icon: 'pi pi-chart-bar',
      routerLink: '/reports'
    }
  ];

  protected toggleSidebar(): void {
    this.sidebarVisible.update(v => !v);
  }
}
