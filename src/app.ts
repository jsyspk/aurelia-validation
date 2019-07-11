import { inject } from 'aurelia-framework';
import Project from "./project";

@inject(Project)
export class App {
  public message: string = 'Simple validation!';

  private project;
  constructor(project: Project){
    this.project = project;
  }

}
