.PHONY: exec mysql
mysql: ## exec mysql
	docker exec -it mysql_container mysql -usampleuser -psamplepassword -Dsampledb

.PHONY: make up
up: ## make up
	docker-compose up

.PHONY: make up build
up-build: ## docker-compose up build
	docker-compose up --build

.PHONY: make down
down: ## docker-compose down volumes
	docker-compose down --volumes

.PHONY: help
help: Makefile
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: k9s
k9s: ## Start k9s dashboard
	docker run --rm -it -v ~/.kube/config:/root/.kube/config quay.io/derailed/k9s

.PHONY: helm dependency update
helm-dependency-update: ## Helm dependency update
	(cd chart && helm dependency update)

.PHONY: build images prod
image-build-prod: ## Build images prod
	(cd server && docker build -t cloud-app-server.prod -f Dockerfile.prod .)
	(cd client && docker build -t cloud-app-client.prod -f Dockerfile.prod .)
