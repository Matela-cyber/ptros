# PTROS Platform

> PTROS is a multi-app logistics platform built for the full delivery ecosystem: carrier operations, coordinator oversight, and customer-facing order visibility. The platform is not limited to the carrier app alone; it includes multiple integrated web applications connected to the same backend, data layer, and operational workflows.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-Realtime-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)

## 📋 Platform Overview

PTROS is an integrated delivery and logistics platform that supports the complete operational flow across three primary web experiences:

- Carrier app: delivery execution, route handling, and live operational updates
- Coordinator app: dispatch management, fleet oversight, and operational control
- Customer app: order tracking, communication, and transparency for end users

This repository contains the shared platform codebase for those connected apps and the backend services that support them. The carrier experience is one part of the larger PTROS system, not the entire product.

### Core Platform Capabilities

- Real-time vehicle and order tracking
- Route optimization and dispatch sequencing
- Coordinator dashboard for operational oversight
- Customer visibility into delivery status and communication
- Shared backend services for order management, notifications, and integrations
- Multi-app architecture with one connected logistics workflow

---

## 🏗️ Architecture

This is a monorepo for the PTROS platform using Turbo for orchestration and pnpm for package management. The repository includes multiple web applications that operate as a single integrated system.

### Core Structure

```bash
ptros/
├── apps/                              # Web applications
│   ├── carrier/                       # Carrier operations dashboard and delivery workflow
│   ├── coordinator/                   # Dispatch and operations coordination
│   └── customer/                      # Customer-facing tracking and communication portal
├── functions/                          # Firebase Cloud Functions / backend logic
├── packages/                          # Shared utilities, config, and types
├── docs/                              # Documentation
├── scripts/                           # Utility scripts
├── package.json                       # Root workspace config
├── pnpm-lock.yaml                     # Lockfile
├── turbo.json                         # Turbo config
├── firebase.json                      # Firebase config
├── firestore.rules                    # Firestore security rules
├── database.rules.json                # Realtime Database rules
├── storage.rules                      # Storage rules
├── README.md                          # Project overview
└── LICENSE                            # License
```

### Application Roles

| App | Purpose |
|------|---------|
| **Carrier** | Driver and route execution tools, live updates, delivery task handling |
| **Coordinator** | Dispatch control, fleet visibility, assignment logic, operations oversight |
| **Customer** | Customer order tracking, status visibility, and communication experience |

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 18.3 + TypeScript 5.9 |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4 + PostCSS |
| **Mapping** | Leaflet 1.9 + React Leaflet 4.2 + Google Maps API |
| **Routing** | React Router DOM 6.22 |
| **Backend** | Firebase Cloud Functions (Node 20) |
| **Database** | Firebase Firestore |
| **Realtime** | Firebase Realtime Database |
| **Auth** | Firebase Authentication |
| **Email Service** | Resend 4.0 |
| **Monorepo** | Turbo 1.13 + pnpm workspaces |
| **Date Handling** | date-fns 4.1 |
| **Notifications** | React Hot Toast 2.6 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm 8.x or higher
- Firebase CLI
- Valid Firebase project configuration

### Installation

1. Clone the repository

```bash
git clone https://github.com/Matela-cyber/ptros.git
cd ptros
```

2. Install dependencies

```bash
pnpm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

4. Start the platform

```bash
pnpm dev
```

This runs the monorepo and starts the connected app services for the PTROS platform.

### Available Scripts

```bash
# Development
pnpm dev              # Start all apps and services
pnpm build            # Build all packages and apps
pnpm lint             # Run linting across the repo

# Firebase
pnpm functions:serve  # Start Firebase emulators locally
pnpm functions:deploy # Deploy backend functions
pnpm functions:logs   # Stream Firebase function logs
```

---

## 📦 Project Structure by App

### `/apps/carrier`
The delivery operations layer used for carrier-side execution.

- route handling and delivery execution
- live operational updates
- driver-facing task workflows

### `/apps/coordinator`
The operational control layer used for dispatchers and coordinators.

- fleet monitoring
- assignment and scheduling visibility
- coordination and dispatch workflows

### `/apps/customer`
The customer experience layer used for order tracking and communication.

- status tracking
- customer notifications
- visibility into delivery progress

### `/functions`
Serverless backend services for business logic and platform integrations.

- order processing and validation
- route optimization workflows
- notifications and email flows
- database triggers and cleanup

### `/packages`
Shared utilities, configs, and platform-level resources.

---

## 🗺️ Platform Features

### Real-Time Delivery Operations
- Live order and vehicle tracking
- Delivery status visibility across apps
- Centralized operational data flow

### Route Optimization
- Delivery sequencing based on operational constraints
- Efficient assignment and routing logic
- Dynamic updates as conditions change

### Multi-App Coordination
- Carrier app handles execution
- Coordinator app manages oversight and dispatch actions
- Customer app provides transparency and communication

### Operational Intelligence
- KPI and efficiency monitoring
- Dispatch and execution analytics
- Status updates across the platform lifecycle

---

## 🌐 Deployment

The PTROS platform is designed as a multi-app system, with each application deployed independently while sharing the same core backend and business logic.

### Frontend Applications

Each web app can be deployed to Vercel or a similar frontend platform as needed.

### Backend

```bash
pnpm functions:deploy
```

### Database

Configure Firebase resources and indexes using the repo's Firestore and Realtime Database rules.

---

## 🔒 Security

- Firebase Authentication
- Firestore and Realtime Database access rules
- Environment-based secret management
- HTTPS-only communication
- Server-side validation and secure backend logic

---

## 🤝 Contributing

Contributions are welcome. Please follow the normal GitHub flow:

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a pull request

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 👤 Maintainer

**Matela-cyber**

- GitHub: [@Matela-cyber](https://github.com/Matela-cyber)
- Repository: [ptros](https://github.com/Matela-cyber/ptros)

---

## 📞 Support

For issues, questions, or feature requests:

- Open an [Issue](https://github.com/Matela-cyber/ptros/issues)
- Review repository documentation in the `docs` directory

---

## 🙏 Acknowledgments

Built with modern tooling and a multi-app platform architecture, including:

- React and TypeScript
- Firebase and Google Cloud services
- Tailwind CSS and Vite
- Open source mapping and logistics tooling

---

<div align="center">

**[⬆ Back to Top](#ptros-platform)**

</div>
