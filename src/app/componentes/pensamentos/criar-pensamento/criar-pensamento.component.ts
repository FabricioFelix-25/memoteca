import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],  // Adicione FormsModule aqui
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']  // Corrija para styleUrls
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert("novo pensamento");
  }

  cancelarPensamento() {
    alert("cancelamento");
  }
}
