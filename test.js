const { Graph, Node, dijkstrasAlgorithm } = require('./dijkstra');
const { describe, before, it } = require('node:test');

let graph = new Graph();

let SF = new Node('SF');
let Seattle = new Node('Seattle');
let Idaho = new Node('Idaho');
let Chicago = new Node('Chicago');
let NYC = new Node('NYC');

let algoResult = null;

describe('Dijkstra', () => {

    before(() => {
        SF.addNeighbor(Seattle, 3);
        SF.addNeighbor(Idaho, 5);

        Seattle.addNeighbor(SF, 3);
        Seattle.addNeighbor(Idaho, 1);
        Seattle.addNeighbor(Chicago, 2);

        Idaho.addNeighbor(SF, 5);
        Idaho.addNeighbor(Seattle, 1);
        Idaho.addNeighbor(Chicago, 3);
        Idaho.addNeighbor(NYC, 6);

        Chicago.addNeighbor(Seattle, 2);
        Chicago.addNeighbor(Idaho, 3);
        Chicago.addNeighbor(NYC, 4);

        NYC.addNeighbor(Idaho, 6);
        NYC.addNeighbor(Chicago, 4);

        graph.addNode(SF);
        graph.addNode(Seattle);
        graph.addNode(Idaho);
        graph.addNode(Chicago);
        graph.addNode(NYC);

    });

    it('test SF as starting point', () => {

        graph.resetNodes();
        SF.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

    });

    it('test Seattle as starting point', () => {

        graph.resetNodes();
        Seattle.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

    });

    it('test Idaho as starting point', () => {

        graph.resetNodes();
        Idaho.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

    });

    it('test Chicago as starting point', () => {

        graph.resetNodes();
        Chicago.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

    });

    it('test NYC as starting point', () => {

        graph.resetNodes();
        NYC.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

    });

});
