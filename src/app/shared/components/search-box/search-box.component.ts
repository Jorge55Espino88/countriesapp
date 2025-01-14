import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: []
})
export class SearchBoxComponent {
  @Input()
  public placeholder:string = "";

  //Podemos observar que en primer lugar hicimos un @Input() para que el componente hijo search-box.component.ts recibiera por argumento el valor del placeholder por la plantilla HTML del componente padre by-capital-page.component.html. Posteriormente se realizó un @Output() para la accion inversa, es decir, del hijo al padre y se creo el eventEmitter para emitir el evento al momento de pulsar la tecla ENTER.
  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value:string):void{
    this.onValue.emit(value);
  }
}
