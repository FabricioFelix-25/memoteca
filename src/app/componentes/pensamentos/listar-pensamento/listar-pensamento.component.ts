import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterModule, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

}
