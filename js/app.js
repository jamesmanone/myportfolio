class Project {
  constructor(data) {
    this.name = ko.observable(data.name);
    this.link = ko.observable(data.link);
    this.githubLink = ko.observable(data.githubLink);
    this.img = ko.observable(data.img);
    this.description = ko.observable(data.description);
    this.tags = ko.observableArray(data.tags);
  }
}

class ProjectViewModel {
  constructor() {
    this.projects = ko.observableArray();
    fetch('/data/projects.json')
      .then(res => {
        if(!res.ok) throw new Error('bad response');
        return res;
      })
      .then(res => res.json())
      .then(data => data.forEach(project => this.projects.push(project)));
  }

}

function main() {
  ko.applyBindings(new ProjectViewModel);
}

$(main);
