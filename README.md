
# Dashboard Application

This project provides a dashboard application built with React, TypeScript, and Vite. It leverages Material UI for responsive design and uses various tools and libraries to handle data fetching, state management, routing, and internationalization.

## Production URl

 https://dahshboard-anyware.netlify.app/

## Features

- **Responsive Design**: Designed with Material UI to ensure a responsive and user-friendly interface.
- **Icons**: Utilizes Material UI icons for a polished look and intuitive navigation.
- **Data Fetching**: Fetches announcements and dues data from APIs using React Query, with built-in error handling and empty data states.
- **Date Formatting**: Uses `date-fns` for formatting dates.
- **Routing**: Managed with React Router for navigation between different parts of the application.
- **State Management**: Redux Toolkit is used to handle authentication and manage application state.
- **Authentication**: Only logged-in users can access the dashboard. Unauthorized access is handled using Toastify notifications.
- **Error Handling**: Displays user-friendly messages for loading errors and empty data states.
- **Not Found Page**: Handles 404 errors for non-existent routes.
- **Internationalization**: Supports multiple languages using `i18next` for translations. Users can switch between English and Arabic.
- **Lazy Loading**: Images are lazily loaded to improve performance using the `loading="lazy"` attribute.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Vite**: Fast build tool and development server.
- **Material UI**: React component library for building user interfaces.
- **React Query**: Data-fetching and synchronization library.
- **date-fns**: Date utility library for formatting and manipulating dates.
- **React Router**: Declarative routing for React.js.
- **Redux Toolkit**: A library for managing application state.
- **Toastify**: Notification library for React.
- **i18next**: Internationalization framework for React, providing translation and language switching.
- **Lazy Loading**: Implements lazy loading for images to enhance performance.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/dashboard-app.git
cd dashboard-app
```

### 2. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

## Usage

1. **Switching Languages**: Use the language switcher to toggle between English and Arabic.
2. **Lazy Loading Images**: Images will be loaded as they enter the viewport to improve performance.

For more details on customization and further development, refer to the documentation for each technology used.

```

