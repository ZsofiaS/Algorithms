# Breadth-first search

Breadth-first search is a searching algorithm that runs on a graph.

### How to use

Open `SpecRunner.html` in the browser. This will run all the tests.

In the browser console, create a new instance of sort: `let search = new Search()`.  
Run the function `breadthFirst` with an object input of your choice that represents a graph, and the starting node, like so:  
```
search.breadthFirst( {
  'you': ['a', 'b'],
  'b': ['c'],
  'c': []
  }, 'you')
```

The algorithm will find the person among the 'closest friends' whose name contains 'cat'. If there is no such person even among friends of friends, it will return false.

This is part of my algorithms project to validate my understanding of algorithmic complexity, and coding while learning the topics.
