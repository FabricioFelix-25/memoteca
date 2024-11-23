import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {


  @Input() pensamento = {
    conteudo: 'i love angular',
    autoria: 'ff0',
    modelo: 'modelo3',
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
