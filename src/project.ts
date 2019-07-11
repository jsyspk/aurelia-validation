class Project {

  private _name: string;

  constructor()
  {

  }

  set name(newName)
  {
    //console.log('setting name' + newName);
    if(newName.length < 5)
    {
      throw new Error('The string is too short');
    }
    this._name = newName;
  }

  get name()
  {
    return this._name;
  }

}

export default Project;
