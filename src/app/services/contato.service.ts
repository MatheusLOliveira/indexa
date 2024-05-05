import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@email.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email": "email@email.com"},
    {"id": 3, "nome": "Bruno", "telefone": "95 695521583", "email": "email@email.com"},
    {"id": 4, "nome": "Beatriz", "telefone": "25 854986459", "email": "email@email.com"},
    {"id": 6, "nome": "Cláudia", "telefone": "31 176437098", "email": "email@email.com"},
    {"id": 7, "nome": "Daniel", "telefone": "56 613692441", "email": "email@email.com"},
    {"id": 9, "nome": "Eduardo", "telefone": "71 962784210", "email": "email@email.com"},
    {"id": 10, "nome": "Eliana", "telefone": "94 601212586", "email": "email@email.com"},
    {"id": 11, "nome": "Fabio", "telefone": "21 613882845", "email": "email@email.com"},
    {"id": 13, "nome": "Gabriel", "telefone": "23 876578152", "email": "email@email.com"},
    {"id": 14, "nome": "Giovana", "telefone": "82 836752948", "email": "email@email.com"},
    {"id": 15, "nome": "Henrique", "telefone": "16 326607223", "email": "email@email.com"},
  ]

  constructor() {
    //Tentar obter os dados do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage =
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if (contatosLocalStorage !== null) {
      this.contatos = contatosLocalStorage || null;
    }

    //Salvar os contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
