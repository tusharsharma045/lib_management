/**
 * Library Management System - JavaScript
 * Handles all book operations and UI interactions
 */

// ============ DATA ============
let books = {
    1: { title: "Python Basics", author: "John Smith", available: true },
    2: { title: "Learn JavaScript", author: "Jane Doe", available: true },
    3: { title: "Data Structures", author: "Mike Johnson", available: true },
    4: { title: "Web Development", author: "Sarah Wilson", available: true },
    5: { title: "Machine Learning", author: "David Brown", available: true }
};

let assigned = {};  // {bookId: {user, title, time}}
let nextId = 6;
let currentBookId = null;

// ============ HELPER FUNCTIONS ============
const $ = (id) => document.getElementById(id);

/**
 * Show alert message to user
 * @param {string} msg - Message to display
 * @param {string} type - 'success' or 'error'
 */
function showAlert(msg, type) {
    const el = $('alert');
    el.textContent = msg;
    el.className = `alert ${type}`;
    setTimeout(() => el.className = 'alert', 3000);
}

/**
 * Switch between tabs (books, add, assigned)
 * @param {string} tab - Tab name to show
 */
function showTab(tab) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    // Remove active from all nav buttons
    document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
    
    // Show selected section
    $(tab).classList.add('active');
    event.target.classList.add('active');
    
    // Refresh data
    if (tab === 'books') renderBooks();
    if (tab === 'assigned') renderAssigned();
}

// ============ RENDER FUNCTIONS ============

/**
 * Render all books table
 */
function renderBooks() {
    const rows = Object.entries(books).map(([id, b]) => `
        <tr>
            <td>${id}</td>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td class="${b.available ? 'available' : 'assigned'}">
                ${b.available ? 'Available' : 'Assigned'}
            </td>
            <td>
                ${b.available 
                    ? `<button class="btn btn-green" onclick="openModal(${id})">Assign</button>
                       <button class="btn btn-red" onclick="deleteBook(${id})">Delete</button>`
                    : `<button class="btn btn-blue" onclick="returnBook(${id})">Return</button>`
                }
            </td>
        </tr>
    `).join('');
    
    $('bookList').innerHTML = rows || '<tr><td colspan="5" class="empty">No books in library</td></tr>';
}

/**
 * Render assigned books table with duration
 */
function renderAssigned() {
    const now = new Date();
    
    const rows = Object.entries(assigned).map(([id, a]) => {
        const mins = Math.floor((now - new Date(a.time)) / 60000);
        const hours = Math.floor(mins / 60);
        const remainingMins = mins % 60;
        
        return `
            <tr>
                <td>${id}</td>
                <td>${a.title}</td>
                <td>${a.user}</td>
                <td>${new Date(a.time).toLocaleString()}</td>
                <td>${hours}h ${remainingMins}m</td>
                <td><button class="btn btn-blue" onclick="returnBook(${id})">Return</button></td>
            </tr>
        `;
    }).join('');
    
    $('assignedList').innerHTML = rows || '<tr><td colspan="6" class="empty">No books assigned</td></tr>';
}

// ============ BOOK ACTIONS ============

/**
 * Add a new book to the library
 * @param {Event} e - Form submit event
 */
function addBook(e) {
    e.preventDefault();
    
    const title = $('title').value.trim();
    const author = $('author').value.trim();
    
    if (!title || !author) {
        showAlert('Please fill all fields!', 'error');
        return;
    }
    
    books[nextId++] = { title, author, available: true };
    showAlert(`"${title}" added successfully!`, 'success');
    
    e.target.reset();
    showTab('books');
}

/**
 * Delete a book from library
 * @param {number} id - Book ID to delete
 */
function deleteBook(id) {
    if (!confirm('Delete this book?')) return;
    
    const title = books[id].title;
    delete books[id];
    
    showAlert(`"${title}" deleted!`, 'success');
    renderBooks();
}

// ============ MODAL FUNCTIONS ============

/**
 * Open assign modal for a book
 * @param {number} id - Book ID to assign
 */
function openModal(id) {
    currentBookId = id;
    $('modalTitle').textContent = `Book: ${books[id].title}`;
    $('userName').value = '';
    $('modal').classList.add('show');
}

/**
 * Close the assign modal
 */
function closeModal() {
    $('modal').classList.remove('show');
}

/**
 * Confirm book assignment to user
 */
function confirmAssign() {
    const user = $('userName').value.trim();
    
    if (!user) {
        showAlert('Please enter a name!', 'error');
        return;
    }
    
    // Update book status
    books[currentBookId].available = false;
    
    // Add to assigned list
    assigned[currentBookId] = {
        user: user,
        title: books[currentBookId].title,
        time: new Date().toISOString()
    };
    
    showAlert(`Assigned to ${user}!`, 'success');
    closeModal();
    renderBooks();
}

/**
 * Return a book to the library
 * @param {number} id - Book ID to return
 */
function returnBook(id) {
    if (!confirm('Return this book?')) return;
    
    const a = assigned[id];
    const mins = Math.floor((new Date() - new Date(a.time)) / 60000);
    const hours = Math.floor(mins / 60);
    const remainingMins = mins % 60;
    
    // Update book status
    books[id].available = true;
    delete assigned[id];
    
    showAlert(`"${a.title}" returned by ${a.user}. Duration: ${hours}h ${remainingMins}m`, 'success');
    renderBooks();
    renderAssigned();
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', renderBooks);
