import {customElement, bindable, bindingMode} from 'aurelia-framework';
import Project from "./project";

@customElement('project-name')
class ProjectName{
  private hint: string;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) project: Project;

  constructor(){
    this.hint = '';
  }

  verify(event)
  {
    try {
      this.project.name = event.target.value;
      this.hint = '';
    } catch (e) {
      this.hint = e.message;
    }
  }
}
export default ProjectName;
