# BetterPrep

An experiment on how far a guy can push his software engineering skills. Also a multiplayer coding interview practice platform.

## Prerequisites

* Docker
* Any modern web browser with JavaScript support

## Setup

1. From the root of the project repository, run `npm i`. This installs the required Prettier dependency which enables code formatting for the entire project.

## Running the application locally

1. In the root of the project repository, create a directory called `docker-data`. This directory will be used to persist data for the docker containers.
2. From the root of the project repository, run `docker compose up -d`.
3. Run `docker ps` to verify the containers are running.
4. View the application at `http://localhost:5173` on your browser.

To run the individual services without Docker, please visit their respective `README.md` files.
