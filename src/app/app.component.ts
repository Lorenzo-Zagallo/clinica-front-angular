import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet], // Importante para o <router-outlet> funcionar
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'clinica-front';
}