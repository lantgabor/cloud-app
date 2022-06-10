# REACT-NODEJS-MYSQL-DOCKER 

 - Fullstack application created using node, react, mysql and docker
 - Production docker images are in their respected folders, ready for kubernetes deployment
 - `Chart` folder holds helm chart for this application. Top level values file is used for deployment

# Local development usin docker-compose

To start local development environment run:
```
make up
```

or
```
make up-build
```

To force image build

To delete local environment containers
```sh
make down
```

# To deploy on kubernetes cluster

Build production docker images:
```
make image-build-prod && make help-dependency-update
```


```sh
helm upgrade --install my-release-name ./chart -f chart/values.yaml -n mynamespace --create-namespace
```

## Run k9s to inspect cluster state and get other informaton

To run k9s:
```
make k9s
```

## Helper commands

To get additional information about helpful commands run:

```
make help
```