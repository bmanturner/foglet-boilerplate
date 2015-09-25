# Foglet Boilerplate

## Set-up

### Setting up MongoDb

Open two terminal windows.
In the first window run:

  > make mongod

In the second window run:

  > mongo
  > use foglet
  > var config = {_id: "foglet", members: [{_id: 0, host: "127.0.0.1:27017"}]}
  > rs.initiate(config)

## Starting Foglet Boilerplate

If mongodb is not running:

  > make mongod

In a new terminal window:

  > make start

View Foglet Boilerplate in your browser by visiting:

  > localhost:5000
