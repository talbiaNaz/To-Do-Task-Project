import { Component,  EventEmitter,  Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'add-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-list.component.html',
  styleUrl: './add-list.component.css'
})
export class AddListComponent {

  //input field data binding
  dataString:string='';

  // event emit uing output decorator 
  @Output() sendString = new EventEmitter<string>();

  // button triger
  sendData()
  {
    console.log(this.dataString);
    this.sendString.emit(this.dataString);
    this.dataString='';
  }
}
