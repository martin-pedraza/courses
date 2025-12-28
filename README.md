# Courses

A personal collection of programming course certificates (PDFs) with an integrated web server for easy navigation and documentation viewing.

## 🌐 Live Demo

The project is hosted at: [https://courses-p8h9.onrender.com](https://courses-p8h9.onrender.com)

## Project structure 🔧

- [`All/`](./All/All.md) — Contains the original PDF certificates.
- [`By-Provider/`](./By-Provider/Provider.md) — Indexes grouped by provider 
- [`By-Skill/`](./By-Skill/Skill.md) — Indexes grouped by skill
- [`By-Year/`](./By-Year/Year.md) — Certificates grouped by year.

## 🚀 Features

- **Express-based web server** for serving markdown files as HTML
- **Automatic markdown rendering** using `marked`
- **PDF certificate hosting** with direct access
- **Clean navigation** through organized directory structure

## 💼 Enterprise Use Case

This project structure can be adapted for **corporate documentation systems**:

- **Employee certifications tracking** - Organize team training and compliance certificates
- **Internal knowledge base** - Convert markdown documentation into browsable web pages
- **Project documentation** - Host technical specs, API docs, and guides
- **Compliance repositories** - Maintain ISO, security, or industry certifications
- **Training materials** - Centralize course materials and completion records

The lightweight Express server makes it easy to deploy on internal networks or cloud platforms, providing instant access to organized documentation without complex CMS systems.

## 🛠️ Running Locally

```bash
npm install
node index.js
```
Server will run on http://localhost:3000