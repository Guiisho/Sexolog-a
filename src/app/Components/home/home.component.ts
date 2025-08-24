import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger') as HTMLElement;
    const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul') as HTMLElement;
    const header = document.querySelector('.header') as HTMLElement;

    if (hamburger) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        if (mobileMenu) {
          mobileMenu.classList.toggle('active');
        }
      });
    }

    if (header) { // <-- Verifica que header existe antes de agregar el evento
      window.addEventListener('scroll', () => {
        if (window.scrollY > 250) {
          this.renderer.addClass(header, 'scrolled');
        } else {
          this.renderer.removeClass(header, 'scrolled');
        }
      });
    }
  }
}
