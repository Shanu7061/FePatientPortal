# React + TypeScript + Vite

Key Components current project:

1. axios for api calling, with configurations in utils.ts
2. store folder for global state management with redux-toolkit, slice, createAsyncThuk
3. Register, Login, Book Appointment and 404 Not Found page and dashboard page
4. JWT based authentication
5. Create Appointment route is protected, while Home, Login and register page are not protected.

Future Implementation:

Input data validation and sanitization to prevent from XSS attack
docker and containerization
GitHub actions for CI-CD setup
MUI themes and breakpoints for responsiveness
Protected routes
Deployment on ECS container
Caching using Radish library
API gateway with WAF enbaled for request routing, security, load-balancing, scaling etc.
CloudWatch for logging and monitoring
