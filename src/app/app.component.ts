import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { Skill } from './interfaces/skills';
import { ProjectsComponent } from './components/projects/projects.component';
import { Project } from './interfaces/project';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portafolio';

  public skills:Skill[]=[
    {
      name:'Node js',
      icon:`../../../assets/icons/node.svg`
    },
    {
      name:'Javascript',
      icon:`../../../assets/icons/javascript.svg`
    },
    {
      name:'Typescript',
      icon:`../../../assets/icons/typescript.svg`
    },
    {
      name:'Angular',
      icon:`../../../assets/icons/angular.svg`
    },
    {
      name:'Docker',
      icon:`../../../assets/icons/docker.svg`
    },
    {
      name:'Jenkins',
      icon:`../../../assets/icons/jenkins.svg`
    },
    {
      name:'Nestjs',
      icon:`../../../assets/icons/nestjs.svg`
    },
    {
      name:'Mongodb',
      icon:`../../../assets/icons/mongodb.svg`
    },
    {
      name:'Mysql',
      icon:`../../../assets/icons/mysql.svg`
    },
    {
      name:'Mysql',
      icon:`../../../assets/icons/postgresql.svg`
    },
    {
      name:'Aws',
      icon:`../../../assets/icons/aws.svg`
    },
    {
      name:'Terraform',
      icon:`../../../assets/icons/terraform.svg`
    }
  ];

  public projects:Project[]=[
    {
    title:'Portafolio',
    repository:'',
    url:'',
    image:'../../../assets/projects/project1.png'
    },
    {
    title:'Plataforma de citas medicas',
    repository:'',
    url:'',
    image:'../../../assets/projects/project2.png'
    },
    {
    title:'Marketplace tauruu',
    repository:'',
    url:'',
    image:'../../../assets/projects/project3.png'
    }
  ]
}
