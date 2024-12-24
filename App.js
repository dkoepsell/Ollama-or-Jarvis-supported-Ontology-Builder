import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OntologyBuilder = () => {
    const [nodes, setNodes] = useState([]);
    const [newNode, setNewNode] = useState("");

    useEffect(() => {
        fetchOntology();
    }, []);

    const fetchOntology = async () => {
        const response = await axios.get('http://localhost:5000/query_ontology', { params: { query: "MATCH (n)-[r]->(m) RETURN n, r, m" } });
        setNodes(response.data);
    };

    const addNode = async () => {
        await axios.post('http://localhost:5000/add_node', { label: "Concept", name: newNode });
        setNewNode("");
        fetchOntology();
    };

    return (
        <div>
            <h1>Ontology Builder</h1>
            <input
                type="text"
                value={newNode}
                onChange={(e) => setNewNode(e.target.value)}
                placeholder="Enter new concept"
            />
            <button onClick={addNode}>Add Node</button>
            <div>
                <h2>Nodes</h2>
                <ul>
                    {nodes.map((node, index) => (
                        <li key={index}>{node.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OntologyBuilder;
