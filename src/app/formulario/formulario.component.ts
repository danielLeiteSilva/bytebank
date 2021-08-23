import { EventEmitter } from "@angular/core";
import { Component, NgModule, Output } from "@angular/core";

@Component({
    selector: "app-formulario",
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
})

export class FormularioComponent{


    @Output() transfere = new EventEmitter<any>();

    valor: Number;
    destino: Number;

    transferir(){
        this.transfere.emit({
            valor: this.valor,
            destino: this.destino
        })

        this.limpar()

    }

    limpar(){
        this.valor = 0
        this.destino = 0
    }

}