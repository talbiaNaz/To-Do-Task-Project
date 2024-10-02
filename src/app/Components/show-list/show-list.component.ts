import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'show-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

  listIndex: number[]=[];

 @Input() taskList: string[] = [];



}
