import { customElement, bindable } from 'aurelia-framework';

@customElement('project-name')
class ProjectName{
  private hint: string;
  @bindable name: string;

  constructor(){
    this.hint = '';
  }

  verify()
  {

    if(this.name.length < 5 ) {
      this.hint = 'Name is too short, please make it at least 5 chars long';
    } else {
      this.hint = '';
    }
  }
}
export default ProjectName;
