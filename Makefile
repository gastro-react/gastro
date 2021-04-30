up:
	docker-compose up -d --build

down:
	docker-compose down -v

logs:
	docker-compose logs -f


build-all-prod: build-gateway build-frontend build-backend

build-gateway:
	docker --log-level=debug build --pull --file=gateway/docker/production/nginx/Dockerfile --tag=${REGISTRY}/gateway-pickledbananas:latest gateway/docker

build-frontend:
	docker --log-level=debug build --pull --file=frontend/docker/production/nginx/Dockerfile --tag=${REGISTRY}/frontend-pickledbananas:latest frontend

build-backend:
	docker --log-level=debug build --pull --file=backend/docker/production/Dockerfile --tag=${REGISTRY}/backend-pickledbananas:latest backend


push-prod: push-gateway push-frontend push-backend

push-gateway:
	docker push ${REGISTRY}/gateway-pickledbananas:latest

push-frontend:
	docker push ${REGISTRY}/frontend-pickledbananas:latest

push-backend:
	docker push ${REGISTRY}/backend-pickledbananas:latest