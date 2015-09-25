APP_NAME=foglet
PORT?=5000
MONGO_URL?=mongodb://localhost:27017/$(APP_NAME)
MONGO_OPLOG_URL?=mongodb://localhost:27017/local

mongod:
	mongod --replSet $(APP_NAME) --port 27017

start:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	NODE_ENV='development' \
	MONGO_URL=$(MONGO_URL) \
	MONGO_OPLOG_URL=$(MONGO_OPLOG_URL) \
	meteor -p $(PORT) --settings ./config/dev/settings.json

debug:
	NODE_OPTIONS='--debug' \
	MONGO_URL=$(MONGO_URL) \
	MONGO_OPLOG_URL=$(MONGO_OPLOG_URL) \
	meteor debug -p $(PORT) --settings ./config/$(APP_ENV)/settings.json

start-prod:
	NODE_OPTIONS=$(NODE_OPTIONS) \
	NODE_ENV='production' \
	MONGO_URL=$(MONGO_URL) \
	MONGO_OPLOG_URL=$(MONGO_OPLOG_URL) \
	meteor -p $(PORT) --production --settings ./config/prod/settings.json
