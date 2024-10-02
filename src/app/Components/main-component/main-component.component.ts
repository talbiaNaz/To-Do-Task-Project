import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AddListComponent } from "../add-list/add-list.component";
import { ShowListComponent } from "../show-list/show-list.component";
import { UpdateListComponent } from '../update-list/update-list.component';
import { NgClass } from '@angular/common';
import { DeleteListComponent } from "../delete-list/delete-list.component";

@Component({
  selector: 'main-component',
  standalone: true,
  imports: [RouterOutlet, AddListComponent, ShowListComponent, UpdateListComponent, NgClass, DeleteListComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  //main list 
  list :string[]=[];
  indexList:number=0;
  activeComponent: string = 'show-list'; // Default active component

  // Method to set the active component using class directive 
  setActiveComponent(componentName: string) {
    this.activeComponent = componentName;
  }
  //Now making function which accept data from addlist component
  fetchData(value :string){
     this.list.push(value);
     console.log(this.list);
  }


  //update the list 
  gettingUpdateSting(event:{updateData:string, indexno:number}){
    this.indexList = event.indexno-1;
    if(this.list.length>this.indexList)
    {
      this.list[this.indexList] = event.updateData;
      alert("Your task is updated at this" + (this.indexList+1) + " number");

    }
    else
    {
      alert("Your total tasks are" + this.list.length);
    }
  }

// deleting task
delTaskFromList( index:number)
  {
    this.indexList = index-1;

    if (index >= 0 && index < this.list.length) 
      {
      this.list.splice(this.indexList, 1); 
      console.log("Task at index deleted.");
     } 
   else 
     {
      console.error('Invalid index: Unable to delete task.');
     }
  }

}
