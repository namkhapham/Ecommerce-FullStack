# 🛒 Orebi Shopping - Full Stack E-commerce Platform

A complete, production-ready e-commerce solution built with modern technologies including React.js, Node.js, Express, MongoDB, Redux Toolkit, Tailwind CSS, and Stripe payment integration.


## 🌟 Features

### Customer Features

- **Product Catalog**: Browse products with advanced filtering and search
- **Shopping Cart**: Add/remove items with real-time updates
- **User Authentication**: Secure login/register system
- **Order Management**: Place orders, track order history
- **Payment Integration**: Secure Stripe payment processing
- **Responsive Design**: Works perfectly on all devices
- **FAQ Section**: Comprehensive help section
- **Blog Page**: Coming soon functionality

### Admin Features

- **Dashboard Analytics**: Sales metrics and business insights
- **Product Management**: Add, edit, delete products with image upload
- **Order Management**: View and manage customer orders
- **User Management**: Manage customer accounts
- **Brand & Category Management**: Organize products efficiently
- **Contact Management**: Handle customer inquiries
- **Inventory Tracking**: Real-time stock management
- **Refresh Functionality**: One-click data refresh across all pages

### Technical Features

- **Database Migration**: Complete export/import system for MongoDB
- **Environment Configuration**: Separate development/production configs
- **CORS Policy**: Production-ready cross-origin resource sharing
- **Order Count Badges**: Real-time order notifications
- **Custom Skeleton Loading**: Smooth loading experiences
- **React Icons**: Modern icon system
- **Redux State Management**: Centralized state management

## 🚀 Quick Start Guide

### 1. Project Setup

After purchasing and downloading the code:

```bash
# Extract the downloaded ZIP file
# Navigate to the project directory
cd orebishopping-vitejs

# Install dependencies for all components
# For Server
cd server
npm install

# For Client
cd ../client
npm install

# For Admin
cd ../admin
npm install
```

### 2. Environment Variables Setup

You'll need to create environment files for each component. **These are not included for security reasons.**

#### 🔧 Server Environment Variables

# URLs
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
PORT=8000
```

### 4. Database Setup

Initialize your database with sample data:

```bash
cd server

# Create admin user (optional)
npm run create-admin

# Seed database with sample data (optional)
npm run seed
```

### 5. Running the Application

Start all three components in different terminals:

```bash
# Terminal 1 - Start Backend Server
cd server
npm run dev
# Server runs on http://localhost:8000

# Terminal 2 - Start Client (Customer Frontend)
cd client
npm run dev
# Client runs on http://localhost:5173

# Terminal 3 - Start Admin Panel
cd admin
npm run dev
# Admin runs on http://localhost:5174
```

### 6. Access the Application

- **Customer Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **API Server**: http://localhost:8000


## 🛠️ Development Scripts

### Server Scripts

- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run seed` - Seed database with sample data
- `npm run create-admin` - Create admin user

### Client/Admin Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Key Technologies Used

- **Frontend**: React.js, Vite, Tailwind CSS, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JWT tokens
- **File Upload**: Cloudinary
- **Email**: Nodemailer
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: React Icons
