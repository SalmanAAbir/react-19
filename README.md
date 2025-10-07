# React 19 Authentication App

A modern React 19 application with authentication, built with Vite, Tailwind CSS, and SCSS.

## Features

- ⚛️ React 19 (latest version)
- 🎨 Tailwind CSS for utility-first styling
- 💅 SCSS for custom styling
- 🔐 Authentication system (Login & Registration)
- 🛡️ Protected routes
- 🚀 Fast development with Vite
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## How to Use

1. **Login**: Use the demo account button to auto-fill credentials

   - Username: `emilys`
   - Password: `emilyspass`
   - Or enter your own credentials

2. **Registration**: Click "Register here" to create an account

   - Enter email and password
   - Confirm password
   - Click "Register"

3. **Hello Page**: After successful login, you'll be redirected to `/hello`
   - This page is protected and only accessible when authenticated
   - Click "Logout" to return to the login page

## Technologies Used

- **React 19**: Latest version of React
- **Vite**: Next-generation frontend tooling
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **SCSS**: CSS preprocessor for custom styles
- **DummyJSON API**: Free authentication API for testing

## License

MIT
