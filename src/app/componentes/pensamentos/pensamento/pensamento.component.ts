import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {


  Pensamento = {
    conteudo: 'i love angular',
    autoria: 'ff0',
    modelo: 'modelo3',
  }
}