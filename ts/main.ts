class Git {
  
  id: string;
  name: string;
  message: string;

  constructor(name: string) {
    //repo name
    this.name = name;
  }

  commit(id: string, message: string) {
    this.id = id;
    this.message = message;
    return this;
  }
}

const repo = new Git('build your own Git');

