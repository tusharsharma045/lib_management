# Library Management System

A simple CLI-based library management system for beginners built with Python.

## Features

- View all books in the library
- Add new books
- Delete books
- Assign books to users
- Return books
- Track borrowing time for each user

## Getting Started

### Prerequisites

- Python 3.x installed on your system

### Running the Application

```bash
python library.py
```

## Usage

When you run the program, you'll see a menu with these options:

```
==================================================
       LIBRARY MANAGEMENT SYSTEM
==================================================
1. View All Books
2. Add New Book
3. Delete Book
4. Assign Book to User
5. Return Book
6. View Assigned Books
7. Exit
==================================================
```

### Menu Options

| Option | Description |
|--------|-------------|
| 1 | View all books with their availability status |
| 2 | Add a new book (title and author) |
| 3 | Delete a book from the library |
| 4 | Assign a book to a user (tracks time) |
| 5 | Return a book (shows borrowing duration) |
| 6 | View all currently assigned books |
| 7 | Exit the program |

## Default Books

The system comes with 5 pre-loaded books:

1. Python Basics - John Smith
2. Learn JavaScript - Jane Doe
3. Data Structures - Mike Johnson
4. Web Development - Sarah Wilson
5. Machine Learning - David Brown

## Example Usage

### Adding a Book
```
Enter your choice (1-7): 2
Enter book title: Introduction to AI
Enter author name: Alice Cooper
Book 'Introduction to AI' added successfully with ID: 6
```

### Assigning a Book
```
Enter your choice (1-7): 4
Enter book ID to assign: 1
Enter user name: John
Book 'Python Basics' assigned to John
Assigned at: 2026-02-05 10:30:00
```

### Returning a Book
```
Enter your choice (1-7): 5
Enter book ID to return: 1
Book 'Python Basics' returned by John
Duration: 0 hours, 15 minutes, 30 seconds
```

## License

This project is open source and available for educational purposes.
