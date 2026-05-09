# 🏋️ GreenFit - Dockerized Fitness Logger

GreenFit is a simple demo full-stack fitness logging application built using:

- Node.js
- Express.js
- MongoDB
- Docker

Users can enter workout details through a web interface, and the data is stored in MongoDB.

---

# 🚀 Features

- Simple fitness activity logger
- MongoDB database integration
- Mongo Express dashboard
- Dockerized setup
- Multi-container networking

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongo Express
- Docker

---

# 📸 Screenshots

## GreenFit UI

<img width="1440" height="839" alt="GreenFit UI" src="https://github.com/user-attachments/assets/0052bca9-cde4-4eba-b546-59ee4b66f869" />

---

## MongoDB Logs

<img width="1889" height="814" alt="Container Logs" src="https://github.com/user-attachments/assets/29d8e4ca-e094-4d42-8775-f854c43b3433" />

---

## Docker Hub

<img width="1581" height="820" alt="Docker Hub" src="https://github.com/user-attachments/assets/3c6e24bc-6ffa-495a-8db7-8e8f836b447d" />

---

# ⚙️ Setup

## Create Network

```bash
docker network create mongo-network
```

## Run MongoDB

```bash
docker run -d \
  -p 27017:27017 \
  --name mongodb \
  --net mongo-network \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=password \
  mongo
```

## Run Mongo Express

```bash
docker run -d \
  -p 8081:8081 \
  --name mongo-express \
  --net mongo-network \
  -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
  -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
  -e ME_CONFIG_MONGODB_SERVER=mongodb \
  mongo-express
```

## Build Docker Image

```bash
docker build -t greenfit-image .
```

## Run GreenFit App

```bash
docker run -d \
  -p 3000:3000 \
  --name greenfit-site \
  --net mongo-network \
  greenfit-image
```

---

# 🔗 Access

- GreenFit App: http://localhost:3000
- Mongo Express: http://localhost:8081

Login:
- Username: admin
- Password: password

---

# 👨‍💻 Author

Sivasankaran  
Docker Hub: `sivasankaran189`
