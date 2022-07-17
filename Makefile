.PHONY: build-app create-announcer clear-screen test-announcer publish-item

ANNOUNCER=57342374
CONNECTOR=ALGO
KEY=
SALE=
USESBC=0

clear-screen:
	@clear

create-announcer: clear-screen
	REACH_CONNECTOR_MODE=$(CONNECTOR) node ./scripts/create-announcer.mjs key="$(KEY)"

test-announcer: clear-screen
	REACH_CONNECTOR_MODE=$(CONNECTOR) node ./scripts/test-announcer.mjs key="$(KEY)" announcer=$(ANNOUNCER) 

publish-item: clear-screen
	node ./scripts/announce-sale.mjs key="$(KEY)" announcer=$(ANNOUNCER) sale=$(SALE) uses-bc=$(USESBC)

build-app: clear-screen
	npm run build && open ./build