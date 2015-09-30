start:
	NODE_ENV='development' \
	meteor --settings ./config/dev/settings.json

debug:
	NODE_OPTIONS='--debug' \
	meteor debug --settings ./config/dev/settings.json

start-prod:
	NODE_ENV='production' \
	meteor --production --settings ./config/prod/settings.json
