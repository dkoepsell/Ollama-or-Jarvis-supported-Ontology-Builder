# Ollama-or-Jarvis-supported-Ontology-Builder
# Ontology Builder

This project facilitates ontology building using an interactive frontend and a Flask backend connected to a Neo4j graph database.

## Features

- Add and visualize ontology nodes and relationships
- Store ontology data in a Neo4j graph database
- Easy setup for local development

## Prerequisites

- **Windows Subsystem for Linux (WSL)** installed with Ubuntu
- Python 3.8 or higher
- Node.js and npm
- Neo4j

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask backend:
   ```bash
   python app.py
   ```

### Neo4j Setup

1. Install Neo4j and start the service:
   ```bash
   sudo apt install neo4j
   sudo systemctl start neo4j
   ```
2. Access Neo4j at `http://localhost:7474` and set the password.
3. Ensure Neo4j listens on `localhost`:
   ```bash
   sudo nano /etc/neo4j/neo4j.conf
   ```
   Uncomment and set:
   ```plaintext
   dbms.default_listen_address=localhost
   ```

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

## Usage

1. Access the frontend at `http://localhost:3000`.
2. Add nodes and visualize the ontology.
3. Use Neo4j Browser (`http://localhost:7474`) to view the database.

## Project Structure

```plaintext
ontology-builder/
├── backend/           # Backend server (Flask)
├── frontend/          # Frontend app (React)
├── README.md          # Documentation
```

## Future Improvements

- Add relationships via the frontend.
- Integrate NLP for auto-suggesting ontology elements.
- Enhance visualization with libraries like D3.js.

## License

MIT
