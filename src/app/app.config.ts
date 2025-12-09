import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),

        // Habilita o cliente HTTP (o novo jeito de importar HttpClientModule)
        provideHttpClient(
            withFetch(), // Usa Fetch API nativa (mais moderna)
            withInterceptors([authInterceptor]) // Ativamos o nosso interceptor
        )
    ]
};