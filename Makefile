MFLAGS = -s
MAKEFLAGS = ${MFLAGS}

.PHONY: test bolt-test karma-test build

default: test

build:
	bolt build -s src/js  -m -i -r -e src/js/bolt/demo/DemoMain.js -o gen	

test: bolt-test karma-test

karma-test:
	karma start config/karma/karma.conf.js --single-run

bolt-test:
	find test/js/node -name '*Test.js' | xargs bolt test config/bolt/test.js

dev:
	karma start config/karma/karma.conf.js
