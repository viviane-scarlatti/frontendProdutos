import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // armazenando o TOKEN em um disposivo de armazenamento do browser chamado localStorage para evitar que recargas na tela percam essa informação
  // recupera o valor que foi armazenado no local Storage
  public getAllProdutos(){
    let token = localStorage.getItem("viviToken");
    return this.http.get("http://localhost:8080/produto/todos?token="+token);
  }
}
