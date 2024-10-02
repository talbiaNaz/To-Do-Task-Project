import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'update-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-list.component.html',
  styleUrl: './update-list.component.css'
})
export class UpdateListComponent {
updateString:string='';
listno:number=1;

@Output() updateValue = new EventEmitter<{updateData:string , indexno:number}>();

updateTask(){
  this.updateValue.emit( {updateData:this.updateString , indexno:this.listno});
  this.updateString='';
}

}
