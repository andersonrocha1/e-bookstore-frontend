import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    nome_autor: '',
    descricao: '',
    texto: ''
  }

  titulo = new FormControl('', [Validators.minLength(5)])
  nome_autor = new FormControl('', [Validators.minLength(5)])
  descricao = new FormControl('', [Validators.minLength(10)])
  texto = new FormControl('', [Validators.minLength(16)])

  constructor(){}

  ngOnInit(): void {

  }

  getMessage() {
    if(this.titulo.invalid){
      return "O campo Título, precisa de no mínimo 5 caracteres!"
    }else if(this.nome_autor.invalid){
      return "O campo Autor precisa de no mínimo 5 caracteres"
    }else if(this.descricao.invalid){
      return "O campo Descrição precisa de no mínimo 10 caracteres"
    }else if(this.texto.invalid){
      return "O campo Texto precisa de no mínimo 16 caracteres"
    }
    return false
  }

}
