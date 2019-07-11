import { inject } from 'aurelia-framework';
import Project from "./project";

@inject(Project)
export class App {

  private message: string;
  private project;

  constructor(project: Project){
    this.project = project;
    this.message = 'How to use validation with simple javascript objects';
  }

}
