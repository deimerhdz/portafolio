import { Component, Input } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { Project } from '../../interfaces/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CardProjectComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input()
  public projects:Project[]=[];

}
