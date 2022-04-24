.PHONY: exec mysql
mysql: ## exec mysql
	docker exec -it mysql_container mysql -usampleuser -psamplepassword -Dsampledb

.PHONY: make up
up: ## make up
	docker-compose up --build

.PHONY: make down
down: ## make down
	docker-compse down --volumes

.PHONY: help
help: Makefile
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: k9s
k9s: ## Start k9s dashboard
	docker run --rm -it -v ~/.kube/config:/root/.kube/config quay.io/derailed/k9s
