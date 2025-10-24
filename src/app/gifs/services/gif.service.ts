import { Injectable, signal, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, type Environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private http = inject(HttpClient);
  private readonly apiKey = environment.apiKey;
  private readonly apiUrl = environment.giphyUrl;

  gifs = signal<any[]>([]);
  history = signal<string[]>([]);
  isLoading = signal<boolean>(false);

  constructor() {
    const stored = localStorage.getItem('history');
    if (stored) this.history.set(JSON.parse(stored));

    effect(() => {
      localStorage.setItem('history', JSON.stringify(this.history()));
    });
  }

  searchGifs(query: string, limit: number = 50): void {
    query = query.trim().toLowerCase();
    if (!query) return;

    console.log('Buscando:', query);

    if (!this.history().includes(query)) {
      this.history.set([query, ...this.history().slice(0, 9)]);
    }

    this.isLoading.set(true);

    const url = `${this.apiUrl}?api_key=${this.apiKey}&q=${query}&limit=${limit}&rating=g&lang=en`;

    this.http.get(url).subscribe({
      next: (resp: any) => {
        console.log('GIFs encontrados:', resp.data.length);
        this.gifs.set(resp.data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error al buscar GIFs:', error);
        this.gifs.set([]);
        this.isLoading.set(false);
      }
    });
  }

  clearGifs(): void {
    this.gifs.set([]);
  }
}