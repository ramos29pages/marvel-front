import { Component, OnInit } from '@angular/core';
import { HorizontalScrollDirective } from '../../directives/horizontal-scroll.directive';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-comic-list',
  standalone: true,
  imports: [HorizontalScrollDirective, CommonModule],
  templateUrl: './comic-list.component.html',
  styleUrl: './comic-list.component.scss'
})
export class ComicListComponent implements OnInit{

  comics: any[] = []; // Aquí se almacenan los cómics de la API
  public favoriteComics: number[] = []; // IDs de cómics favoritos del usuario
  filteredComics: any[] = [];
  actionFilter = 'Ver Favoritos';
  actionFilterIcon = 'fa-solid fa-star';

  constructor(private http: HttpClient, private router : Router) {}

  ngOnInit(): void {
    this.loadComics();
  }

  loadComics(): void {
    // Llama a la API para obtener los cómics
    this.http.get('http://localhost:3000/comics').subscribe((comics: any) => {
      this.comics = comics;
      this.filteredComics = comics;
    });

    // Llama a la API para obtener los favoritos del usuario
    this.http.get('http://localhost:3000/users/get-favorites').subscribe((favorites: any) => {
      this.favoriteComics = Array.of(favorites?.userFavorites).flat();
      console.log('[FAVORITES COMICS = ]',this.favoriteComics);
    });
  }

  isFavorite(comicId: number): boolean {
    if (Array.isArray(this.favoriteComics)) {
      return this.favoriteComics.includes(comicId);
    } else {
      console.error('favoriteComics no es un arreglo');
      return false;
    }
  }

  goToDetails(comicId: number): void {
    this.router.navigate(['dashboard/comics', comicId]);
  }

  toggleFavorite(comicId: number, event: MouseEvent): void {
    event.stopPropagation(); // Prevenir que también se active `goToDetails`

    console.log('[UPDATE FAV = ]',comicId);
    // Lógica para actualizar favoritos
    const isFav = this.isFavorite(comicId);
    if (isFav) {
      this.favoriteComics = this.favoriteComics.filter(id => id !== comicId);
    } else {
      this.favoriteComics.push(comicId);
    }

    // Llamada al backend para actualizar favoritos
    this.updateFavoritesOnBackend(comicId, !isFav).subscribe(
      () => console.log('Favoritos actualizados en el backend'),
      (error: any) => console.error('Error actualizando favoritos:', error)
    );
  }

  updateFavoritesOnBackend(comicId: number, isAdding: boolean) {
    // Aquí harías tu llamada HTTP al backend
    // Ejemplo: this.http.post(...)
    this.http.post('http://localhost:3000/comics/add-favorite', { comicId }).subscribe((comics: any) => {

      if(comics.success){
        return of(true)
      } else{
          return of(false); // Sustituir con llamada real
        }
    });

    return of(false); // Sustituir con llamada real

  }

  filterActive: boolean = false;

toggleFilter(): void {
  console.log('Filters');
  this.filterActive = !this.filterActive;
  if (this.filterActive) {
    this.filteredComics = this.comics.filter(comic => this.favoriteComics.includes(comic.id));
    this.actionFilter = 'Ver Todos';
    this.actionFilterIcon = 'fa-solid fa-xmark';
  } else {
    this.filteredComics = this.comics;
    this.actionFilter = 'Ver Favoritos';
    this.actionFilterIcon = 'fa-solid fa-star';
  }
}

}
