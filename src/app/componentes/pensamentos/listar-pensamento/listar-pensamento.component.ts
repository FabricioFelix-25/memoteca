import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css',
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo Informacoes Para componente filho',
      autoria: 'Componente filho',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha Propriedade é decorada comn @input',
      autoria: 'Filho',
      modelo: 'modelo2',
    },
  ];
}
