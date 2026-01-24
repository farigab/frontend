import { Component, OnInit, inject, effect } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  template: `
    <div class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p>Finalizando login...</p>
      </div>
    </div>
  `
})
export class AuthCallbackComponent implements OnInit {

  private router = inject(Router);
  private auth = inject(AuthService);

  constructor() {
    effect(() => {
      const user = this.auth.user();
      if (user) {
        this.router.navigate(['/'], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    this.auth.loadUser();
  }
}
