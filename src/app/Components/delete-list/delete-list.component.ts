import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'delete-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-list.component.html',
  styleUrl: './delete-list.component.css'
})
export class DeleteListComponent {

  listno:number=0;
 

@Output() delTaskList = new EventEmitter<number>();

  deleteTask(){
     this.delTaskList.emit(this.listno);
  }
}
