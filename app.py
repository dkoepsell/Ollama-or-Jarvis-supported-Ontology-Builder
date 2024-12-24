from flask import Flask, request, jsonify
from py2neo import Graph, Node, Relationship

app = Flask(__name__)

# Connect to Neo4j database
graph = Graph("bolt://localhost:7687", auth=("neo4j", "password"))

@app.route('/add_node', methods=['POST'])
def add_node():
    data = request.json
    node = Node(data['label'], name=data['name'])
    graph.create(node)
    return jsonify({"message": "Node added successfully"})

@app.route('/add_relationship', methods=['POST'])
def add_relationship():
    data = request.json
    node1 = graph.nodes.match(data['label1'], name=data['name1']).first()
    node2 = graph.nodes.match(data['label2'], name=data['name2']).first()
    if node1 and node2:
        rel = Relationship(node1, data['relationship'], node2)
        graph.create(rel)
        return jsonify({"message": "Relationship added successfully"})
    return jsonify({"error": "Nodes not found"}), 404

@app.route('/query_ontology', methods=['GET'])
def query_ontology():
    query = request.args.get('query')
    result = graph.run(query).data()
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
