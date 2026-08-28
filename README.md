# DevJobs Board

A responsive job board application built with React that allows users to search, filter, and save developer job listings.

Job data is fetched from the **Arbeitnow Job Board API** and normalized before being used by the application.

## Features

* 🔎 Search jobs by title or company
* 📍 Filter jobs by location
* 💼 Filter jobs by job type
* 🌐 Filter for remote positions
* 🔖 Save and remove bookmarked jobs
* 💾 Persist saved jobs using `localStorage`
* 📄 View detailed job information in a modal
* 📑 Paginate through job listings
* ⚠️ Handle API errors with a retry option
* 🔍 Display an empty state when no jobs match the filters
* 📱 Responsive layout for different screen sizes
* ⌨️ `Ctrl + K` / `Cmd + K` shortcut to focus the search bar

## Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **REST API**
* **localStorage**
* **Lucide React**
* **Vite**

## API

This project uses the [Arbeitnow Job Board API](https://www.arbeitnow.com/api/job-board-api) to fetch job listings.

The API response is normalized before being passed to the UI so that the components work with a consistent job data structure.

## Project Structure

```text
src/
├── api/
│   └── jobsAPI.js
├── components/
│   ├── Filters.jsx
│   ├── JobCard.jsx
│   ├── JobList.jsx
│   ├── JobModal.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
├── utils/
│   └── normalizeJob.js
└── App.jsx
```

## Features in Detail

### Search

Users can search for jobs by entering a job title or company name.

### Filters

Job listings can be filtered by:

* Location
* Job type
* Remote availability

### Bookmarks

Users can save jobs using the bookmark button.

Saved jobs are stored in React state and persisted using `localStorage`, allowing bookmarked jobs to remain available after refreshing the page.

### Job Details

Clicking a job opens a detailed modal containing:

* Company name
* Job title
* Location
* Remote status
* Job type
* Job description
* Application link

### Pagination

Job listings are displayed across multiple pages to keep the interface organized and easier to browse.

### Error & Empty States

The application handles different UI states, including:

* API request errors
* No matching jobs
* Successful job results

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/pedinistar/DevJobs-Board-Job-Search-Dashboard.git>
```

2. Navigate to the project directory:

```bash
cd devjobs-board-job-search-dashboard
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Goals

This project was built to practice and demonstrate:

* React component architecture
* React state management
* REST API integration
* Asynchronous JavaScript
* Client-side filtering and search
* Pagination
* Persistent client-side storage
* Responsive UI development
* Handling loading, empty, and error states

## Links

* **Live Demo:** [(https://devjobs-job-search-dashboard.vercel.app/)]
* **GitHub Repository:** [(https://github.com/pedinistar/DevJobs-Board-Job-Search-Dashboard)]

## Author

**Jayashree Pedini**

Junior Frontend Developer focused on React.js and modern frontend development.
