/* ===== Library Management System ===== */

// ─── DATA ────────────────────────────────────────────

let books = {
    1:  { title: "Python Crash Course",       author: "Eric Matthes",      genre: "Programming",     available: true,  issueCount: 5  },
    2:  { title: "Eloquent JavaScript",       author: "Marijn Haverbeke",  genre: "Programming",     available: true,  issueCount: 8  },
    3:  { title: "Clean Code",                author: "Robert C. Martin",  genre: "Programming",     available: false, issueCount: 12 },
    4:  { title: "HTML & CSS: Design",        author: "Jon Duckett",       genre: "Web Development", available: false, issueCount: 10 },
    5:  { title: "React Up & Running",        author: "Stoyan Stefanov",   genre: "Web Development", available: true,  issueCount: 3  },
    6:  { title: "Node.js Design Patterns",   author: "Mario Casciaro",    genre: "Web Development", available: true,  issueCount: 5  },
    7:  { title: "Machine Learning Yearning", author: "Andrew Ng",         genre: "Data Science",    available: true,  issueCount: 7  },
    8:  { title: "Deep Learning",             author: "Ian Goodfellow",    genre: "Data Science",    available: false, issueCount: 6  },
    9:  { title: "Learning SQL",              author: "Alan Beaulieu",     genre: "Database",        available: true,  issueCount: 2  },
    10: { title: "Database Internals",        author: "Alex Petrov",       genre: "Database",        available: true,  issueCount: 3  },
    11: { title: "Docker in Action",          author: "Jeff Nickoloff",    genre: "DevOps",          available: true,  issueCount: 1  },
    12: { title: "The Phoenix Project",       author: "Gene Kim",          genre: "DevOps",          available: true,  issueCount: 8  },
    13: { title: "Don't Make Me Think",       author: "Steve Krug",        genre: "Design",          available: true,  issueCount: 2  },
    14: { title: "Refactoring UI",            author: "Adam Wathan",       genre: "Design",          available: true,  issueCount: 6  },
    15: { title: "Dune",                      author: "Frank Herbert",     genre: "Fiction",         available: true,  issueCount: 14 },
    16: { title: "The Hitchhiker's Guide",    author: "Douglas Adams",     genre: "Fiction",         available: true,  issueCount: 10 },
    17: { title: "A Brief History of Time",   author: "Stephen Hawking",   genre: "Science",         available: true,  issueCount: 8  },
    18: { title: "The Pragmatic Programmer",  author: "David Thomas",      genre: "Programming",     available: false, issueCount: 9  },
    19: { title: "Design Patterns",           author: "Gang of Four",      genre: "Programming",     available: true,  issueCount: 7  },
    20: { title: "Hands-On ML",               author: "Aurelien Geron",    genre: "Data Science",    available: false, issueCount: 11 },
    21: { title: "Effective Java",            author: "Joshua Bloch",      genre: "Programming",     available: true,  issueCount: 9  },
    22: { title: "The C Programming Language", author: "Brian Kernighan",  genre: "Programming",     available: true,  issueCount: 7  },
    23: { title: "Rust Programming Language", author: "Steve Klabnik",     genre: "Programming",     available: true,  issueCount: 2  },
    24: { title: "JavaScript: Good Parts",    author: "Douglas Crockford", genre: "Web Development", available: true,  issueCount: 4  },
    25: { title: "CSS: Definitive Guide",     author: "Eric A. Meyer",     genre: "Web Development", available: true,  issueCount: 3  },
    26: { title: "Full-Stack Vue.js",         author: "Hassan Djirdeh",    genre: "Web Development", available: false, issueCount: 5  },
    27: { title: "Angular in Action",         author: "Jeremy Wilken",     genre: "Web Development", available: true,  issueCount: 2  },
    28: { title: "Python Data Science",       author: "Jake VanderPlas",   genre: "Data Science",    available: true,  issueCount: 5  },
    29: { title: "R for Data Science",        author: "Hadley Wickham",    genre: "Data Science",    available: false, issueCount: 4  },
    30: { title: "Intro to Algorithms",       author: "Thomas Cormen",     genre: "Programming",     available: true,  issueCount: 6  },
    31: { title: "Grokking Algorithms",       author: "Aditya Bhargava",   genre: "Programming",     available: true,  issueCount: 8  },
    32: { title: "Cracking the Coding Interview", author: "Gayle McDowell", genre: "Programming",   available: true,  issueCount: 10 },
    33: { title: "MongoDB Definitive Guide",  author: "Shannon Bradshaw",  genre: "Database",        available: true,  issueCount: 1  },
    34: { title: "PostgreSQL Up & Running",   author: "Regina Obe",        genre: "Database",        available: true,  issueCount: 2  },
    35: { title: "Redis in Action",           author: "Josiah Carlson",    genre: "Database",        available: true,  issueCount: 3  },
    36: { title: "Kubernetes in Action",      author: "Marko Luksa",       genre: "DevOps",          available: true,  issueCount: 3  },
    37: { title: "Pro Git",                   author: "Scott Chacon",      genre: "DevOps",          available: true,  issueCount: 4  },
    38: { title: "Terraform Up & Running",    author: "Yevgeniy Brikman",  genre: "DevOps",          available: false, issueCount: 5  },
    39: { title: "Designing Interfaces",      author: "Jenifer Tidwell",   genre: "Design",          available: true,  issueCount: 2  },
    40: { title: "The Design of Everyday Things", author: "Don Norman",    genre: "Design",          available: true,  issueCount: 7  },
    41: { title: "Sprint",                    author: "Jake Knapp",        genre: "Design",          available: true,  issueCount: 4  },
    42: { title: "1984",                      author: "George Orwell",     genre: "Fiction",         available: true,  issueCount: 13 },
    43: { title: "Brave New World",           author: "Aldous Huxley",     genre: "Fiction",         available: true,  issueCount: 9  },
    44: { title: "The Great Gatsby",          author: "F. Scott Fitzgerald", genre: "Fiction",       available: true,  issueCount: 11 },
    45: { title: "To Kill a Mockingbird",     author: "Harper Lee",        genre: "Fiction",         available: false, issueCount: 12 },
    46: { title: "Sapiens",                   author: "Yuval N. Harari",   genre: "Science",         available: true,  issueCount: 15 },
    47: { title: "Cosmos",                    author: "Carl Sagan",        genre: "Science",         available: true,  issueCount: 6  },
    48: { title: "The Selfish Gene",          author: "Richard Dawkins",   genre: "Science",         available: true,  issueCount: 5  },
    49: { title: "Thinking, Fast and Slow",   author: "Daniel Kahneman",   genre: "Science",         available: true,  issueCount: 9  },
    50: { title: "Structure & Interpretation", author: "Harold Abelson",   genre: "Programming",     available: true,  issueCount: 4  },
    51: { title: "Code Complete",             author: "Steve McConnell",   genre: "Programming",     available: true,  issueCount: 6  },
    52: { title: "Web Performance in Action", author: "Jeremy Wagner",     genre: "Web Development", available: true,  issueCount: 3  },
    53: { title: "Progressive Web Apps",      author: "Jason Grigsby",     genre: "Web Development", available: true,  issueCount: 1  },
    54: { title: "Fluent Python",             author: "Luciano Ramalho",   genre: "Programming",     available: false, issueCount: 8  },
    55: { title: "Go Programming Language",   author: "Alan Donovan",      genre: "Programming",     available: true,  issueCount: 3  },
    56: { title: "Site Reliability Engineering", author: "Betsy Beyer",    genre: "DevOps",          available: true,  issueCount: 7  },
    57: { title: "Algorithms Unlocked",       author: "Thomas Cormen",     genre: "Programming",     available: true,  issueCount: 5  },
    58: { title: "Operating Systems",         author: "Abraham Silberschatz", genre: "Science",      available: true,  issueCount: 4  },
    59: { title: "Computer Networking",       author: "James Kurose",      genre: "Science",         available: true,  issueCount: 3  },
    60: { title: "Ender's Game",              author: "Orson Scott Card",  genre: "Fiction",         available: true,  issueCount: 7  },
};

let assigned = {
    3:  { user: "Priya Patel",  title: "Clean Code",               time: "2026-02-22T14:15:00.000Z" },
    4:  { user: "Aman Sharma",  title: "HTML & CSS: Design",       time: "2026-02-20T09:30:00.000Z" },
    8:  { user: "Sneha Gupta",  title: "Deep Learning",            time: "2026-02-23T16:45:00.000Z" },
    18: { user: "Ravi Kumar",   title: "The Pragmatic Programmer", time: "2026-02-18T10:00:00.000Z" },
    20: { user: "Karan Singh",  title: "Hands-On ML",              time: "2026-02-24T08:00:00.000Z" },
    26: { user: "Meera Joshi",  title: "Full-Stack Vue.js",        time: "2026-02-21T11:00:00.000Z" },
    29: { user: "Rahul Nair",   title: "R for Data Science",       time: "2026-02-23T10:15:00.000Z" },
    38: { user: "Vikram Rao",   title: "Terraform Up & Running",   time: "2026-02-19T13:30:00.000Z" },
    45: { user: "Anita Desai",  title: "To Kill a Mockingbird",    time: "2026-02-22T09:00:00.000Z" },
    54: { user: "Rohan Das",    title: "Fluent Python",            time: "2026-02-24T15:00:00.000Z" },
};

let historyLog = [
    { book: "Clean Code",        user: "Arjun Mehta",  action: "Issued",   date: "2026-01-05T10:00:00.000Z" },
    { book: "Clean Code",        user: "Arjun Mehta",  action: "Returned", date: "2026-01-12T11:30:00.000Z" },
    { book: "Eloquent JavaScript", user: "Neha Verma", action: "Issued",   date: "2026-01-08T09:00:00.000Z" },
    { book: "Eloquent JavaScript", user: "Neha Verma", action: "Returned", date: "2026-01-20T15:00:00.000Z" },
    { book: "Clean Code",        user: "Priya Patel",  action: "Issued",   date: "2026-02-22T14:15:00.000Z" },
    { book: "HTML & CSS: Design", user: "Aman Sharma", action: "Issued",   date: "2026-02-20T09:30:00.000Z" },
    { book: "Deep Learning",     user: "Sneha Gupta",  action: "Issued",   date: "2026-02-23T16:45:00.000Z" },
    { book: "Hands-On ML",       user: "Karan Singh",  action: "Issued",   date: "2026-02-24T08:00:00.000Z" },
    { book: "Full-Stack Vue.js", user: "Meera Joshi",  action: "Issued",   date: "2026-02-21T11:00:00.000Z" },
    { book: "R for Data Science", user: "Rahul Nair",  action: "Issued",   date: "2026-02-23T10:15:00.000Z" },
    { book: "Terraform Up & Running", user: "Vikram Rao", action: "Issued", date: "2026-02-19T13:30:00.000Z" },
    { book: "To Kill a Mockingbird", user: "Anita Desai", action: "Issued", date: "2026-02-22T09:00:00.000Z" },
    { book: "Fluent Python",     user: "Rohan Das",    action: "Issued",   date: "2026-02-24T15:00:00.000Z" },
];

let nextId = 61;
let currentBookId = null;

// ─── HELPERS ─────────────────────────────────────────

const $ = (id) => document.getElementById(id);

function showAlert(msg, type) {
    const el = $('alert');
    el.textContent = msg;
    el.className = `alert ${type}`;
    setTimeout(() => el.className = 'alert', 3000);
}

function formatDuration(isoDate) {
    const mins = Math.floor((Date.now() - new Date(isoDate)) / 60000);
    const d = Math.floor(mins / 1440);
    const h = Math.floor((mins % 1440) / 60);
    const m = mins % 60;
    if (d > 0) return `${d}d ${h}h ${m}m`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
}

// Re-render whichever page is currently active
function refreshCurrentPage() {
    const page = document.querySelector('.page.active');
    if (page) navigate(page.id, document.querySelector(`.menu-item[data-section="${page.id}"]`));
}

// ─── NAVIGATION ──────────────────────────────────────

function navigate(sectionId, menuItem) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));

    $(sectionId).classList.add('active');
    if (menuItem) menuItem.classList.add('active');

    const actions = {
        dashboard:     renderDashboard,
        allBooks:      showCategoryView,
        assignedBooks: renderAssigned,
        mostIssued:    renderMostIssued,
        history:       renderHistory,
        searchBooks:   () => { $('searchInput').value = ''; $('searchResults').innerHTML = renderBookRows(Object.entries(books)); },
    };
    if (actions[sectionId]) actions[sectionId]();
}

function handleGlobalSearch(query) {
    if (!query.trim()) return;
    navigate('searchBooks', document.querySelector('[data-section="searchBooks"]'));
    $('searchInput').value = query;
    performSearch();
}

// ─── DASHBOARD ───────────────────────────────────────

function renderDashboard() {
    const all = Object.values(books);
    const available = all.filter(b => b.available).length;

    $('statTotal').textContent = all.length;
    $('statAvailable').textContent = available;
    $('statAssigned').textContent = all.length - available;
    $('statTotalIssues').textContent = all.reduce((s, b) => s + b.issueCount, 0);

    // Top 5 most-issued books
    const top5 = Object.entries(books).sort((a, b) => b[1].issueCount - a[1].issueCount).slice(0, 5);
    $('dashTopIssued').innerHTML = top5.map(([, b], i) => `
        <div class="dash-row">
            <span class="dash-rank">#${i + 1}</span>
            <span class="dash-title">${b.title}</span>
            <span class="dash-badge">${b.issueCount} issues</span>
        </div>
    `).join('');

    // Currently assigned (up to 5)
    const entries = Object.entries(assigned);
    $('dashCurrentAssigned').innerHTML = entries.length === 0
        ? '<p class="empty-text">No books currently assigned</p>'
        : entries.slice(0, 5).map(([, a]) => `
            <div class="dash-row">
                <span class="dash-title">${a.title}</span>
                <span class="dash-user">${a.user}</span>
                <span class="dash-badge">${formatDuration(a.time)}</span>
            </div>
        `).join('');
}

// ─── ALL BOOKS (Category View → Table View) ─────────

let activeCategory = 'all';

// Genre icons for dynamic category cards
const genreIcons = {
    'All':             '📚',
    'Programming':     '💻',
    'Web Development': '🌐',
    'Data Science':    '🤖',
    'Database':        '🗃️',
    'DevOps':          '⚙️',
    'Design':          '🎨',
    'Fiction':         '📖',
    'Science':         '🔬',
};

function showCategoryView() {
    $('categoryView').style.display = '';
    $('booksTableView').style.display = 'none';
    activeCategory = 'all';

    // Count books per genre
    const counts = {};
    Object.values(books).forEach(b => counts[b.genre] = (counts[b.genre] || 0) + 1);

    // Build category cards dynamically
    let html = `
        <div class="category-card" onclick="openCategory('all')">
            <span class="cat-icon">📚</span>
            <span class="cat-name">All Books</span>
            <span class="cat-count">${Object.keys(books).length} books</span>
        </div>`;

    for (const [genre, count] of Object.entries(counts).sort()) {
        html += `
        <div class="category-card" onclick="openCategory('${genre}')">
            <span class="cat-icon">${genreIcons[genre] || '📄'}</span>
            <span class="cat-name">${genre}</span>
            <span class="cat-count">${count} books</span>
        </div>`;
    }

    $('categoryView').innerHTML = html;
}

function openCategory(category) {
    activeCategory = category;
    $('categoryView').style.display = 'none';
    $('booksTableView').style.display = '';
    $('categoryHeading').textContent = category === 'all' ? '📚 All Books' : category;
    $('filterStatus').value = 'all';
    renderAllBooks();
}

function renderAllBooks() {
    const status = $('filterStatus').value;
    const sortBy = $('sortBooks').value;

    let entries = Object.entries(books);

    // Filter by category
    if (activeCategory !== 'all') entries = entries.filter(([, b]) => b.genre === activeCategory);

    // Filter by status
    if (status === 'available') entries = entries.filter(([, b]) => b.available);
    if (status === 'assigned')  entries = entries.filter(([, b]) => !b.available);

    // Sort
    entries.sort((a, b) => {
        if (sortBy === 'title')  return a[1].title.localeCompare(b[1].title);
        if (sortBy === 'author') return a[1].author.localeCompare(b[1].author);
        return Number(a[0]) - Number(b[0]);
    });

    $('bookList').innerHTML = renderBookRows(entries)
        || '<tr><td colspan="7" class="empty">No books match your filters</td></tr>';
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
                    : `<button class="btn btn-info btn-sm" onclick="returnBook(${id})">Return</button>`}
            </td>
        </tr>
    `).join('');
}

// ─── ASSIGNED BOOKS ──────────────────────────────────

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

// ─── ADD BOOK ────────────────────────────────────────

function addBook(e) {
    e.preventDefault();
    const title  = $('inputTitle').value.trim();
    const author = $('inputAuthor').value.trim();
    const genre  = $('inputGenre').value;

    if (!title || !author || !genre) return showAlert('Please fill all fields!', 'error');

    books[nextId++] = { title, author, genre, available: true, issueCount: 0 };
    showAlert(`"${title}" added!`, 'success');
    e.target.reset();
    navigate('allBooks', document.querySelector('[data-section="allBooks"]'));
}

// ─── MOST ISSUED ─────────────────────────────────────

function renderMostIssued() {
    const sorted = Object.entries(books)
        .filter(([, b]) => b.issueCount > 0)
        .sort((a, b) => b[1].issueCount - a[1].issueCount);

    if (!sorted.length) {
        $('mostIssuedList').innerHTML = '<tr><td colspan="6" class="empty">No issue data yet</td></tr>';
        return;
    }
    $('mostIssuedList').innerHTML = sorted.map(([, b], i) => `
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

// ─── HISTORY ─────────────────────────────────────────

function renderHistory() {
    if (!historyLog.length) {
        $('historyList').innerHTML = '<tr><td colspan="5" class="empty">No history yet</td></tr>';
        return;
    }
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

// ─── SEARCH ──────────────────────────────────────────

function performSearch() {
    const q = $('searchInput').value.trim().toLowerCase();
    let entries = Object.entries(books);

    if (q) {
        entries = entries.filter(([id, b]) =>
            b.title.toLowerCase().includes(q) ||
            b.author.toLowerCase().includes(q) ||
            b.genre.toLowerCase().includes(q) ||
            id === q
        );
    }

    $('searchResults').innerHTML = entries.length
        ? renderBookRows(entries)
        : '<tr><td colspan="6" class="empty">No books found</td></tr>';
}

// ─── BOOK ACTIONS (Assign / Return / Delete) ─────────

function deleteBook(id) {
    if (!confirm(`Delete "${books[id].title}"?`)) return;
    const title = books[id].title;
    delete books[id];
    delete assigned[id];
    showAlert(`"${title}" removed.`, 'success');
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
    if (!user) return showAlert('Enter borrower name!', 'error');

    const book = books[currentBookId];
    book.available = false;
    book.issueCount++;
    assigned[currentBookId] = { user, title: book.title, time: new Date().toISOString() };
    historyLog.push({ book: book.title, user, action: "Issued", date: new Date().toISOString() });

    showAlert(`"${book.title}" assigned to ${user}!`, 'success');
    closeModal();
    refreshCurrentPage();
}

function returnBook(id) {
    const a = assigned[id];
    if (!confirm(`Return "${a.title}" from ${a.user}?`)) return;

    books[id].available = true;
    historyLog.push({ book: a.title, user: a.user, action: "Returned", date: new Date().toISOString() });
    delete assigned[id];

    showAlert(`"${a.title}" returned by ${a.user}.`, 'success');
    refreshCurrentPage();
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('modal').classList.contains('show')) closeModal();
});

// ─── INIT ────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => renderDashboard());
