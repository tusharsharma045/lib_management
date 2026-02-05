"""
Simple Library Management System
A beginner-friendly CLI application for managing a library
"""

from datetime import datetime

# Default books in the library
books = {
    1: {"title": "Python Basics", "author": "John Smith", "available": True},
    2: {"title": "Learn JavaScript", "author": "Jane Doe", "available": True},
    3: {"title": "Data Structures", "author": "Mike Johnson", "available": True},
    4: {"title": "Web Development", "author": "Sarah Wilson", "available": True},
    5: {"title": "Machine Learning", "author": "David Brown", "available": True},
}

# Track assigned books with user info and time
assigned_books = {}

# Counter for new book IDs
next_book_id = 6


def display_menu():
    """Display the main menu options"""
    print("\n" + "=" * 50)
    print("       LIBRARY MANAGEMENT SYSTEM")
    print("=" * 50)
    print("1. View All Books")
    print("2. Add New Book")
    print("3. Delete Book")
    print("4. Assign Book to User")
    print("5. Return Book")
    print("6. View Assigned Books")
    print("7. Exit")
    print("=" * 50)


def view_all_books():
    """Display all books in the library"""
    print("\n--- All Books in Library ---")
    if not books:
        print("No books in the library!")
        return
    
    print(f"{'ID':<5} {'Title':<25} {'Author':<20} {'Status':<10}")
    print("-" * 60)
    for book_id, book in books.items():
        status = "Available" if book["available"] else "Assigned"
        print(f"{book_id:<5} {book['title']:<25} {book['author']:<20} {status:<10}")


def add_book():
    """Add a new book to the library"""
    global next_book_id
    
    print("\n--- Add New Book ---")
    title = input("Enter book title: ").strip()
    if not title:
        print("Error: Title cannot be empty!")
        return
    
    author = input("Enter author name: ").strip()
    if not author:
        print("Error: Author cannot be empty!")
        return
    
    books[next_book_id] = {
        "title": title,
        "author": author,
        "available": True
    }
    print(f"Book '{title}' added successfully with ID: {next_book_id}")
    next_book_id += 1


def delete_book():
    """Delete a book from the library"""
    print("\n--- Delete Book ---")
    view_all_books()
    
    if not books:
        return
    
    try:
        book_id = int(input("\nEnter book ID to delete: "))
        if book_id in books:
            if not books[book_id]["available"]:
                print("Error: Cannot delete a book that is currently assigned!")
                return
            
            deleted_book = books.pop(book_id)
            print(f"Book '{deleted_book['title']}' deleted successfully!")
        else:
            print("Error: Book ID not found!")
    except ValueError:
        print("Error: Please enter a valid number!")


def assign_book():
    """Assign a book to a user with time tracking"""
    print("\n--- Assign Book to User ---")
    
    # Show only available books
    available_books = {k: v for k, v in books.items() if v["available"]}
    if not available_books:
        print("No books available for assignment!")
        return
    
    print("\nAvailable Books:")
    print(f"{'ID':<5} {'Title':<25} {'Author':<20}")
    print("-" * 50)
    for book_id, book in available_books.items():
        print(f"{book_id:<5} {book['title']:<25} {book['author']:<20}")
    
    try:
        book_id = int(input("\nEnter book ID to assign: "))
        if book_id not in books:
            print("Error: Book ID not found!")
            return
        
        if not books[book_id]["available"]:
            print("Error: Book is already assigned!")
            return
        
        user_name = input("Enter user name: ").strip()
        if not user_name:
            print("Error: User name cannot be empty!")
            return
        
        # Record assignment with timestamp
        assign_time = datetime.now()
        books[book_id]["available"] = False
        assigned_books[book_id] = {
            "user": user_name,
            "book_title": books[book_id]["title"],
            "assigned_time": assign_time
        }
        
        print(f"\nBook '{books[book_id]['title']}' assigned to {user_name}")
        print(f"Assigned at: {assign_time.strftime('%Y-%m-%d %H:%M:%S')}")
        
    except ValueError:
        print("Error: Please enter a valid number!")


def return_book():
    """Return an assigned book"""
    print("\n--- Return Book ---")
    
    if not assigned_books:
        print("No books are currently assigned!")
        return
    
    print("\nCurrently Assigned Books:")
    print(f"{'ID':<5} {'Title':<25} {'User':<15} {'Assigned At':<20}")
    print("-" * 65)
    for book_id, info in assigned_books.items():
        time_str = info["assigned_time"].strftime('%Y-%m-%d %H:%M:%S')
        print(f"{book_id:<5} {info['book_title']:<25} {info['user']:<15} {time_str:<20}")
    
    try:
        book_id = int(input("\nEnter book ID to return: "))
        if book_id not in assigned_books:
            print("Error: This book is not assigned!")
            return
        
        # Calculate duration
        return_time = datetime.now()
        assign_time = assigned_books[book_id]["assigned_time"]
        duration = return_time - assign_time
        
        # Calculate hours, minutes, seconds
        total_seconds = int(duration.total_seconds())
        hours = total_seconds // 3600
        minutes = (total_seconds % 3600) // 60
        seconds = total_seconds % 60
        
        user_name = assigned_books[book_id]["user"]
        book_title = assigned_books[book_id]["book_title"]
        
        # Update book status and remove from assigned
        books[book_id]["available"] = True
        del assigned_books[book_id]
        
        print(f"\nBook '{book_title}' returned by {user_name}")
        print(f"Duration: {hours} hours, {minutes} minutes, {seconds} seconds")
        
    except ValueError:
        print("Error: Please enter a valid number!")


def view_assigned_books():
    """View all currently assigned books with user tracking info"""
    print("\n--- Assigned Books ---")
    
    if not assigned_books:
        print("No books are currently assigned!")
        return
    
    current_time = datetime.now()
    print(f"{'ID':<5} {'Title':<25} {'User':<15} {'Assigned At':<20} {'Duration':<15}")
    print("-" * 80)
    
    
    for book_id, info in assigned_books.items():
        time_str = info["assigned_time"].strftime('%Y-%m-%d %H:%M:%S')
        
        # Calculate current duration
        duration = current_time - info["assigned_time"]
        total_seconds = int(duration.total_seconds())
        hours = total_seconds // 3600
        minutes = (total_seconds % 3600) // 60
        duration_str = f"{hours}h {minutes}m"
        
        print(f"{book_id:<5} {info['book_title']:<25} {info['user']:<15} {time_str:<20} {duration_str:<15}")


def main():
    """Main function to run the library management system"""
    print("\nWelcome to the Library Management System!")
    
    while True:
        display_menu()
        choice = input("Enter your choice (1-7): ").strip()
        
        if choice == "1":
            view_all_books()
        elif choice == "2":
            add_book()
        elif choice == "3":
            delete_book()
        elif choice == "4":
            assign_book()
        elif choice == "5":
            return_book()
        elif choice == "6":
            view_assigned_books()
        elif choice == "7":
            print("\nThank you for using Library Management System!")
            print("Goodbye!")
            break
        else:
            print("Invalid choice! Please enter a number between 1 and 7.")


if __name__ == "__main__":
    main()
