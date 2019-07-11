import { inject } from 'aurelia-framework';
import Project from "./project";

@inject(Project)
export class App {

  public message: string = 'Ho to use validation with simple javascript objects';
  private project;

  constructor(project: Project){
    this.project = project;
  }
}
