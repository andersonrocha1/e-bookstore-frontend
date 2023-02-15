import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Livro } from './livro.model';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: String = environment.BASE_URL

  constructor(private http: HttpClient) { }

  findAllByCategoria(cat_id: String):Observable<Livro[]> {
    const url = `${this.baseUrl}livros?categoria=${cat_id}`
    return this.http.get<Livro[]>(url)
  }
}
