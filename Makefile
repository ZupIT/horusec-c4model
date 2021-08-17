run:
	c4builder site

up-plantuml:
	docker run -d -p 8080:8080 plantuml/plantuml-server:tomcat