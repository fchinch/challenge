up_build: down up
		@echo "up_build!"

up:
		@echo "Building (when required) and starting docker images..."
		docker compose up --build -d
		@echo "Docker images built and started!"

down:
		@echo "Stopping docker compose!"
		docker compose down
		@echo "Done!"

tests:  backend_test app_test
		@echo "tests executed!"

app_test:
		@echo "Running app tests..."
		cd ../challenge_app_fe && npm install && npm run test
		@echo "Done!"

backend_test:
		@echo "Running backend tests..."
		cd ../challenge_backend && npm install && npm run test
		@echo "backend_test done!"