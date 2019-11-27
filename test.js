const { Graph, Node, dijkstrasAlgorithm } = require('./dijkstra');

let graph = new Graph();

let SF = new Node('SF');
let Seattle = new Node('Seattle');
let Idaho = new Node('Idaho');
let Chicago = new Node('Chicago');
let NYC = new Node('NYC');

let algoResult = null;

describe('Dijkstra', () => {

    before(function (done) {
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

        done();
    });

    it('test SF as starting point', (done) => {

        graph.resetNodes();
        SF.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

        done();
    });

    it('test Seattle as starting point', (done) => {

        graph.resetNodes();
        Seattle.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

        done();
    });

    it('test Idaho as starting point', (done) => {

        graph.resetNodes();
        Idaho.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

        done();
    });

    it('test Chicago as starting point', (done) => {

        graph.resetNodes();
        Chicago.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

        done();
    });

    it('test NYC as starting point', (done) => {

        graph.resetNodes();
        NYC.start = true;

        algoResult = dijkstrasAlgorithm(graph, SF);
        console.log(algoResult);

        done();
    });

});
