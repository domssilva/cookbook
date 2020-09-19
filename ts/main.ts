/*
  Tutorial: https://kushagra.dev/blog/build-git-learn-git

  Git is best thought of as a tool for storing the history 
  of a collection of files.
  And think of repositories as a collection of everything related to Git.
*/
let repo;

function Git(name) {
  // returns repository
  this.name = name;

  // id counter: keeps track of last commit
  this.lastCommitId = -1;
}

repo = new Git('my-repository');

/*
  COMMITS are a snapshot of your project's contents.
  It is these commits which when chained together form the history of your project.
*/

function Commit(id, message) {
  this.id = id;
  this.message = message;
}

Git.prototype.commit = function(message) {
  //In actual Git, commit id is a 40-hexdigit number also called as "SHA-1 id". But for keeping things simple we are using integers here.
  let commit = new Commit(++this.lastCommitId, message);
  return commit;
}

// git commit -m 'init repository'
repo.commit('init repository');

console.log(repo);
