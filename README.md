# Library Management System

A browser-based library management app built with vanilla HTML, CSS, and JavaScript. Designed as an intermediate-level project with a full sidebar navigation, dashboard, book tracking, issue history, and search functionality.

## Preview

> Open `index.html` directly in any browser — no server or installation needed.

## Features

- **Dashboard** — live stats (total books, available, assigned, total issues) with top issued books and currently assigned panel
- **View All Books** — filterable and sortable table of all 20 books by status, genre, or name
- **Assigned Books** — list of all currently borrowed books with borrower name, date, and live duration
- **Add New Book** — form to add a book with title, author, genre, and optional ISBN
- **Most Issued Books** — ranked list of books by how many times they have been issued
- **Issue History** — full log of every issue and return transaction
- **Search & Filter** — real-time search across title, author, and genre

## Project Structure

```
lib-management/
├── index.html    - Main HTML layout (navbar, sidebar, content sections)
├── style.css     - All styling (navbar, sidebar, tables, cards, modals)
├── script.js     - All logic (data, rendering, actions, navigation)
└── README.md     - This file
```

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure and layout |
| CSS3 | Styling, flexbox/grid, animations |
| Vanilla JS | All logic, DOM manipulation, state |

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a browser

```bash
# Or serve locally with any static server
npx serve .
```

## Pre-loaded Data

The system comes with **20 books** across multiple genres:

| Genre | Example Titles |
|-------|----------------|
| Programming | Clean Code, Eloquent JavaScript, Design Patterns |
| Web Development | HTML & CSS: Design, React Up & Running |
| Data Science | Machine Learning Yearning, Deep Learning |
| Database | Learning SQL, MongoDB: The Definitive Guide |
| DevOps | Docker in Action, Pro Git |
| Design | Don't Make Me Think |

**5 books are pre-assigned** to users (Aman Sharma, Priya Patel, Ravi Kumar, Sneha Gupta, Karan Singh) with realistic issue dates.

## Navigation

The sidebar menu is organized into three groups:

**Main**
- Dashboard
- View All Books
- Assigned Books

**Manage**
- Add New Book
- Most Issued Books
- Issue History

**Tools**
- Search & Filter

## License

Open source — free to use for learning and educational purposes.

