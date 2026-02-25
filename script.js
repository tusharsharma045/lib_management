/**
 * Library Management System - Intermediate Level
 * Features: Dashboard, All Books, Assigned, Add Book, Most Issued, History, Search
 */

// DATA STORE

let books = {
    1:  { title: "Python Crash Course",         author: "Eric Matthes",        genre: "Programming",      available: true,  issueCount: 5 },
    2:  { title: "Eloquent JavaScript",          author: "Marijn Haverbeke",    genre: "Programming",      available: true,  issueCount: 8 },
    3:  { title: "Data Structures & Algorithms", author: "Michael Goodrich",    genre: "Programming",      available: true,  issueCount: 3 },
    4:  { title: "HTML & CSS: Design",           author: "Jon Duckett",         genre: "Web Development",  available: false, issueCount: 10 },
    5:  { title: "Machine Learning Yearning",    author: "Andrew Ng",           genre: "Data Science",     available: true,  issueCount: 7 },
    6:  { title: "Clean Code",                   author: "Robert C. Martin",    genre: "Programming",      available: false, issueCount: 12 },
    7:  { title: "Introduction to Algorithms",   author: "Thomas Cormen",       genre: "Programming",      available: true,  issueCount: 6 },
    8:  { title: "The Pragmatic Programmer",     author: "David Thomas",        genre: "Programming",      available: false, issueCount: 9 },
    9:  { title: "JavaScript: The Good Parts",   author: "Douglas Crockford",   genre: "Web Development",  available: true,  issueCount: 4 },
    10: { title: "Learning SQL",                 author: "Alan Beaulieu",       genre: "Database",         available: true,  issueCount: 2 },
    11: { title: "React Up & Running",           author: "Stoyan Stefanov",     genre: "Web Development",  available: true,  issueCount: 3 },
    12: { title: "Deep Learning",                author: "Ian Goodfellow",      genre: "Data Science",     available: false, issueCount: 6 },
    13: { title: "Docker in Action",             author: "Jeff Nickoloff",      genre: "DevOps",           available: true,  issueCount: 1 },
    14: { title: "Node.js Design Patterns",      author: "Mario Casciaro",      genre: "Web Development",  available: true,  issueCount: 5 },
    15: { title: "Design Patterns",              author: "Gang of Four",        genre: "Programming",      available: true,  issueCount: 7 },
    16: { title: "Hands-On ML with Scikit-Learn", author: "Aurelien Geron",     genre: "Data Science",     available: false, issueCount: 11 },
    17: { title: "Pro Git",                      author: "Scott Chacon",        genre: "DevOps",           available: true,  issueCount: 4 },
    18: { title: "Don't Make Me Think",          author: "Steve Krug",          genre: "Design",           available: true,  issueCount: 2 },
    19: { title: "The Art of Computer Science",  author: "Donald Knuth",        genre: "Programming",      available: true,  issueCount: 3 },
    20: { title: "MongoDB: The Definitive Guide", author: "Shannon Bradshaw",   genre: "Database",         available: true,  issueCount: 1 },
};

// Pre-assigned books (IDs 4, 6, 8, 12, 16 are marked available:false)
let assigned = {
    4:  { user: "Aman Sharma",   title: "HTML & CSS: Design",            time: "2026-02-20T09:30:00.000Z" },
    6:  { user: "Priya Patel",   title: "Clean Code",                    time: "2026-02-22T14:15:00.000Z" },
    8:  { user: "Ravi Kumar",    title: "The Pragmatic Programmer",      time: "2026-02-18T10:00:00.000Z" },
    12: { user: "Sneha Gupta",   title: "Deep Learning",                 time: "2026-02-23T16:45:00.000Z" },
    16: { user: "Karan Singh",   title: "Hands-On ML with Scikit-Learn", time: "2026-02-24T08:00:00.000Z" },
};

// Full issue/return history log
let historyLog = [
    { book: "Clean Code",                user: "Arjun Mehta",   action: "Issued",   date: "2026-01-05T10:00:00.000Z" },
    { book: "Clean Code",                user: "Arjun Mehta",   action: "Returned", date: "2026-01-12T11:30:00.000Z" },
    { book: "Eloquent JavaScript",       user: "Neha Verma",    action: "Issued",   date: "2026-01-08T09:00:00.000Z" },
    { book: "Eloquent JavaScript",       user: "Neha Verma",    action: "Returned", date: "2026-01-20T15:00:00.000Z" },
    { book: "HTML & CSS: Design",        user: "Rohan Das",     action: "Issued",   date: "2026-01-10T13:00:00.000Z" },
    { book: "HTML & CSS: Design",        user: "Rohan Das",     action: "Returned", date: "2026-01-18T09:45:00.000Z" },
    { book: "Machine Learning Yearning", user: "Simran Kaur",   action: "Issued",   date: "2026-01-15T11:00:00.000Z" },
    { book: "Machine Learning Yearning", user: "Simran Kaur",   action: "Returned", date: "2026-01-25T10:30:00.000Z" },
    { book: "Clean Code",                user: "Priya Patel",   action: "Issued",   date: "2026-02-22T14:15:00.000Z" },
    { book: "HTML & CSS: Design",        user: "Aman Sharma",   action: "Issued",   date: "2026-02-20T09:30:00.000Z" },
    { book: "The Pragmatic Programmer",  user: "Ravi Kumar",    action: "Issued",   date: "2026-02-18T10:00:00.000Z" },
    { book: "Deep Learning",             user: "Sneha Gupta",   action: "Issued",   date: "2026-02-23T16:45:00.000Z" },
    { book: "Hands-On ML with Scikit-Learn", user: "Karan Singh", action: "Issued", date: "2026-02-24T08:00:00.000Z" },
];

let nextId = 21;
let currentBookId = null;

// UTILITY

const $ = (id) => document.getElementById(id);

function showAlert(msg, type) {
    const el = $('alert');
    el.textContent = msg;
    el.className = `alert ${type}`;
    setTimeout(() => el.className = 'alert', 3500);
}

// Format duration between two dates
function formatDuration(fromISO) {
    const mins = Math.floor((new Date() - new Date(fromISO)) / 60000);
    const days = Math.floor(mins / 1440);
    const hours = Math.floor((mins % 1440) / 60);
    const m = mins % 60;
    if (days > 0) return `${days}d ${hours}h ${m}m`;
    if (hours > 0) return `${hours}h ${m}m`;
    return `${m}m`;
}

// Clock in navbar
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    $('clockDisplay').textContent = now.toLocaleTimeString('en-US', options);
}

// NAVIGATION

function navigate(sectionId, menuItem) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Deactivate all menu items
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));

    // Show target page
    $(sectionId).classList.add('active');
    if (menuItem) menuItem.classList.add('active');

    // Render appropriate content
    switch (sectionId) {
        case 'dashboard':     renderDashboard(); break;
        case 'allBooks':      populateGenreFilter(); renderAllBooks(); break;
        case 'assignedBooks': renderAssigned(); break;
        case 'mostIssued':    renderMostIssued(); break;
        case 'history':       renderHistory(); break;
        case 'searchBooks':   $('searchInput').value = ''; $('searchResults').innerHTML = renderBookRows(Object.entries(books)); break;
    }
}

// Global search from navbar
function handleGlobalSearch(query) {
    if (query.trim().length === 0) return;
    // Switch to search page
    navigate('searchBooks', document.querySelector('[data-section="searchBooks"]'));
    $('searchInput').value = query;
    performSearch();
}

// DASHBOARD

function renderDashboard() {
    const allBooks = Object.values(books);
    const totalBooks = allBooks.length;
    const availableBooks = allBooks.filter(b => b.available).length;
    const assignedBooks = totalBooks - availableBooks;
    const totalIssues = allBooks.reduce((sum, b) => sum + b.issueCount, 0);

    $('statTotal').textContent = totalBooks;
    $('statAvailable').textContent = availableBooks;
    $('statAssigned').textContent = assignedBooks;
    $('statTotalIssues').textContent = totalIssues;

    // Top 5 issued books
    const topBooks = Object.entries(books)
        .sort((a, b) => b[1].issueCount - a[1].issueCount)
        .slice(0, 5);

    $('dashTopIssued').innerHTML = topBooks.map(([id, b], i) => `
        <div class="dash-row">
            <span class="dash-rank">#${i + 1}</span>
            <span class="dash-title">${b.title}</span>
            <span class="dash-badge">${b.issueCount} issues</span>
        </div>
    `).join('');

    // Currently assigned
    const assignedEntries = Object.entries(assigned);
    if (assignedEntries.length === 0) {
        $('dashCurrentAssigned').innerHTML = '<p class="empty-text">No books currently assigned</p>';
    } else {
        $('dashCurrentAssigned').innerHTML = assignedEntries.slice(0, 5).map(([id, a]) => `
            <div class="dash-row">
                <span class="dash-title">${a.title}</span>
                <span class="dash-user">${a.user}</span>
                <span class="dash-badge">${formatDuration(a.time)}</span>
            </div>
        `).join('');
    }
}

// ALL BOOKS

function populateGenreFilter() {
    const genres = [...new Set(Object.values(books).map(b => b.genre))].sort();
    const select = $('filterGenre');
    const current = select.value;
    select.innerHTML = '<option value="all">All Genres</option>' +
        genres.map(g => `<option value="${g}">${g}</option>`).join('');
    select.value = current || 'all';
}

function renderAllBooks() {
    const status = $('filterStatus').value;
    const genre = $('filterGenre').value;
    const sortBy = $('sortBooks').value;

    let entries = Object.entries(books);

    // Filter
    if (status === 'available') entries = entries.filter(([, b]) => b.available);
    if (status === 'assigned') entries = entries.filter(([, b]) => !b.available);
    if (genre !== 'all') entries = entries.filter(([, b]) => b.genre === genre);

    // Sort
    entries.sort((a, b) => {
        if (sortBy === 'title') return a[1].title.localeCompare(b[1].title);
        if (sortBy === 'author') return a[1].author.localeCompare(b[1].author);
        return Number(a[0]) - Number(b[0]);
    });

    $('bookList').innerHTML = renderBookRows(entries) ||
        '<tr><td colspan="7" class="empty">No books match your filters</td></tr>';
}

function renderBookRows(entries) {
    return entries.map(([id, b]) => `
        <tr>
            <td>${id}</td>
            <td><strong>${b.title}</strong></td>
            <td>${b.author}</td>
            <td><span class="genre-tag">${b.genre}</span></td>
            <td><span class="status-badge ${b.available ? 'badge-available' : 'badge-assigned'}">
                ${b.available ? 'Available' : 'Assigned'}
            </span></td>
            <td>${b.issueCount}</td>
            <td class="action-cell">
                ${b.available
                    ? `<button class="btn btn-success btn-sm" onclick="openModal(${id})">Assign</button>
                       <button class="btn btn-danger btn-sm" onclick="deleteBook(${id})">Delete</button>`
                    : `<button class="btn btn-info btn-sm" onclick="returnBook(${id})">Return</button>`
                }
            </td>
        </tr>
    `).join('');
}

// ASSIGNED BOOKS

function renderAssigned() {
    const entries = Object.entries(assigned);

    if (entries.length === 0) {
        $('assignedList').innerHTML = '<tr><td colspan="6" class="empty">No books currently assigned</td></tr>';
        return;
    }

    $('assignedList').innerHTML = entries.map(([id, a]) => `
        <tr>
            <td>${id}</td>
            <td><strong>${a.title}</strong></td>
            <td>${a.user}</td>
            <td>${new Date(a.time).toLocaleString()}</td>
            <td>${formatDuration(a.time)}</td>
            <td><button class="btn btn-info btn-sm" onclick="returnBook(${id})">Return</button></td>
        </tr>
    `).join('');
}

// ADD BOOK

function addBook(e) {
    e.preventDefault();

    const title = $('inputTitle').value.trim();
    const author = $('inputAuthor').value.trim();
    const genre = $('inputGenre').value;

    if (!title || !author || !genre) {
        showAlert('Please fill all required fields!', 'error');
        return;
    }

    books[nextId++] = { title, author, genre, available: true, issueCount: 0 };
    showAlert(`"${title}" added to the library!`, 'success');

    e.target.reset();
    navigate('allBooks', document.querySelector('[data-section="allBooks"]'));
}

// MOST ISSUED

function renderMostIssued() {
    const sorted = Object.entries(books)
        .filter(([, b]) => b.issueCount > 0)
        .sort((a, b) => b[1].issueCount - a[1].issueCount);

    if (sorted.length === 0) {
        $('mostIssuedList').innerHTML = '<tr><td colspan="6" class="empty">No issue data yet</td></tr>';
        return;
    }

    $('mostIssuedList').innerHTML = sorted.map(([id, b], i) => `
        <tr class="${i < 3 ? 'top-rank' : ''}">
            <td><span class="rank-num ${i < 3 ? 'rank-top' : ''}">${i + 1}</span></td>
            <td><strong>${b.title}</strong></td>
            <td>${b.author}</td>
            <td><span class="genre-tag">${b.genre}</span></td>
            <td><strong>${b.issueCount}</strong></td>
            <td><span class="status-badge ${b.available ? 'badge-available' : 'badge-assigned'}">
                ${b.available ? 'Available' : 'Assigned'}
            </span></td>
        </tr>
    `).join('');
}

// HISTORY

function renderHistory() {
    if (historyLog.length === 0) {
        $('historyList').innerHTML = '<tr><td colspan="5" class="empty">No history yet</td></tr>';
        return;
    }

    // Show newest first
    const reversed = [...historyLog].reverse();
    $('historyList').innerHTML = reversed.map((h, i) => `
        <tr>
            <td>${reversed.length - i}</td>
            <td><strong>${h.book}</strong></td>
            <td>${h.user}</td>
            <td><span class="action-badge ${h.action === 'Issued' ? 'action-issued' : 'action-returned'}">
                ${h.action}
            </span></td>
            <td>${new Date(h.date).toLocaleString()}</td>
        </tr>
    `).join('');
}

// SEARCH

function performSearch() {
    const query = $('searchInput').value.trim().toLowerCase();

    let entries = Object.entries(books);
    if (query) {
        entries = entries.filter(([id, b]) =>
            b.title.toLowerCase().includes(query) ||
            b.author.toLowerCase().includes(query) ||
            b.genre.toLowerCase().includes(query) ||
            id === query
        );
    }

    $('searchResults').innerHTML = entries.length > 0
        ? renderBookRows(entries)
        : '<tr><td colspan="6" class="empty">No books found matching your search</td></tr>';
}

// BOOK ACTIONS

function deleteBook(id) {
    if (!confirm(`Delete "${books[id].title}"? This cannot be undone.`)) return;

    const title = books[id].title;
    delete books[id];
    if (assigned[id]) delete assigned[id];

    showAlert(`"${title}" has been removed from the library.`, 'success');
    renderAllBooks();
}

function openModal(id) {
    currentBookId = id;
    $('modalTitle').textContent = `Assigning: "${books[id].title}" by ${books[id].author}`;
    $('userName').value = '';
    $('modal').classList.add('show');
    $('userName').focus();
}

function closeModal() {
    $('modal').classList.remove('show');
    currentBookId = null;
}

function confirmAssign() {
    const user = $('userName').value.trim();
    if (!user) {
        showAlert('Please enter borrower name!', 'error');
        return;
    }

    const book = books[currentBookId];
    book.available = false;
    book.issueCount++;

    assigned[currentBookId] = {
        user: user,
        title: book.title,
        time: new Date().toISOString()
    };

    historyLog.push({
        book: book.title,
        user: user,
        action: "Issued",
        date: new Date().toISOString()
    });

    showAlert(`"${book.title}" assigned to ${user}!`, 'success');
    closeModal();

    // Re-render current page
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        navigate(activePage.id, document.querySelector(`.menu-item[data-section="${activePage.id}"]`));
    }
}

function returnBook(id) {
    const a = assigned[id];
    if (!confirm(`Return "${a.title}" from ${a.user}?`)) return;

    const duration = formatDuration(a.time);

    books[id].available = true;

    historyLog.push({
        book: a.title,
        user: a.user,
        action: "Returned",
        date: new Date().toISOString()
    });

    delete assigned[id];

    showAlert(`"${a.title}" returned by ${a.user}. Duration: ${duration}`, 'success');

    // Re-render current page
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        navigate(activePage.id, document.querySelector(`.menu-item[data-section="${activePage.id}"]`));
    }
}

// Handle Enter key in modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('modal').classList.contains('show')) {
        closeModal();
    }
});

// INITIALIZE

document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    updateClock();
    setInterval(updateClock, 1000);
});
