import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {
  @Input()
  public project:Project ={
    title:'',
    repository:'',
    url:'',
    image:''
  }
}
