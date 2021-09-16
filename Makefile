GO ?= go
ADDLICENSE ?= addlicense

build:
	ARGS=""; c4builder $(ARGS)

run:
	c4builder site

up-plantuml:
	docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat

license:
	$(GO) get -u github.com/google/addlicense
	@$(ADDLICENSE) -check -f ./copyright.txt $(shell find -regex '.*\.\(go\|js\|ts\|yml\|yaml\|sh\|dockerfile|md\)')

license-fix:
	$(GO) get -u github.com/google/addlicense
	@$(ADDLICENSE) -f ./copyright.txt $(shell find -regex '.*\.\(go\|js\|ts\|yml\|yaml\|sh\|dockerfile|md\)')
