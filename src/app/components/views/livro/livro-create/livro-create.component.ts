import { Component } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent {

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    descricao: '',
    texto: ''
  }

}
