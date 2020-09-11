'use strict';

class Search {
  breadthFirst(graph, start) {
    let queue = [];
    queue.push(...graph[start]);
    let searched = [];
    while (queue.length > 0) {
      let person = queue[0];
      if (!searched.includes(person)) {
        if (person.includes('cat')) {
          queue.shift();
          return person;
        } else {
          queue.shift();
          queue.push(...graph[person]);
          searched.push(person);
        }
      }
    }
    return false;
  }
}
