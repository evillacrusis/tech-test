# Construction Site Event Handling System

## Overview

This project is designed to handle construction site events, such as user entries and exits, and trigger appropriate actions. It is built with TypeScript and Node.js and includes unit tests for the core functionality. The system is scalable to handle new events and actions.

## Features

- **Event Handling**: Handles user entry and exit events.
- **Actions**:
  - **User Entry**: Generates a PDF and sends it via email to the site supervisor.
  - **User Exit**: Sends an SMS notification to the site supervisor.
- **Scalability**: Easily extendable to accommodate new events and actions.
## Setup

1. **Install Dependencies:**
    ```bash
    npm install
2. **Run tests:**
    ```bash
    npm run test 
This will execute unit tests using Jest to verify the functionality of event handling and action triggers.
## ERD Diagram

An Entity-Relationship Diagram (ERD) for this system is available in the repository. It represents the relationship between events and actions, showing how events trigger actions.

You can view the ERD diagram [here](docs/erd-diagram.png).

## Assumptions
- **Events:** Defined as User Entry and User Exit.
- **Actions:** Includes generating a PDF and sending an SMS notification.