# Breadth-first search

Breadth-first search is a searching algorithm that runs on a graph.

### How to use

Open `SpecRunner.html` in the browser. This will run all the tests.

In the browser console, create a new instance of search: `let search = new Search()`.  
Run the function `breadthFirst` with an object input of your choice that represents a graph, and the starting node, like so:  
```
search.breadthFirst( {
  'you': ['a', 'b'],
  'b': ['c'],
  'c': []
  }, 'you')
```
The object represents a directed graph where every person ('you') maps this person's friends (['a', 'b']). The object keys are all the nodes in the graph (friends & friends of friends).
The algorithm will find the closest person from the starting node whose name contains 'cat'. If there is no such person even among friends of friends, it will return false.

This is part of my algorithms project to validate my understanding of algorithmic complexity, and coding while learning the topics.
