import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from "./componentes/pensamentos/criar-pensamento/criar-pensamento.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memoteca';
  valor: string = '';
}
