# 🍽️ Food Kiosk App

A full-stack food ordering kiosk built with **Next.js**, **TypeScript**, **Prisma**, and **PostgreSQL**. The application allows customers to browse products by category and create orders, while administrators can manage products and track real-time orders through a dedicated admin panel.

---

## ✨ Features

### 🧑‍🍳 Customer Side
- 🔍 View products by category on `/order/[category]`
- ☕ App automatically redirects to the first category (`/order/cafe`)
- 🛒 Add products to an order and submit it

### 🛠️ Admin Panel
- 📦 `/admin/products` – View all products in a table and edit them
- ➕ `/admin/products/new` – Add new products via form
- 📋 `/admin/order` – View incoming orders and their details
- ✅ `/orders` – View the last 5 completed orders

---

## 🔧 Tech Stack

- **Next.js** – App framework  
- **TypeScript** – Static typing  
- **Tailwind CSS** – Styling  
- **Prisma** – ORM  
- **PostgreSQL** – Database  
- **Zustand** – State management  
- **SWR** – Data fetching  
- **Zod** – Schema validation  
- **React Toastify** – Notifications

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js ≥ 18  
- PostgreSQL running locally or on the cloud  

### 🔧 Environment Setup

Create a `.env` file in the root directory:

