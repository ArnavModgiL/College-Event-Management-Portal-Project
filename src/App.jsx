
import React from 'react';

// Original CampusConnect Home page markup.
// The existing script.js continues to handle the page interactions.
const originalHomeMarkup = `

<section class="hero">
    <div class="hero-content">
        <span class="hero-tag">YOUR CAMPUS. YOUR EVENTS.</span>

        <h1>
            Discover.<br>
            Participate.<br>
            <span>Celebrate.</span>
        </h1>

        <p>
            Explore exciting college events, workshops,
            competitions, cultural fests and sports activities
            happening around your campus.
        </p>

        <div class="hero-buttons">
            <button onclick="scrollToEvents()" class="primary-btn">
                Explore Events →
            </button>

            <button
                onclick="showToast('Welcome to CampusConnect!')"
                class="secondary-btn"
            >
                Learn More
            </button>
        </div>
    </div>
</section>

<!-- STATS -->
<section class="stats">
    <div><strong>48+</strong><span>Events</span></div>
    <div><strong>2,500+</strong><span>Students</span></div>
    <div><strong>18</strong><span>Clubs</span></div>
    <div><strong>12</strong><span>Categories</span></div>
</section>

<!-- EVENTS -->
<section id="events" class="section">
    <div class="section-heading">
        <div>
            <span class="section-label">EXPLORE</span>
            <h2>Upcoming Events</h2>
        </div>

        <button class="view-all" onclick="showToast('Showing all events')">
            View All →
        </button>
    </div>

    <div class="filters">
        <input type="text" id="searchInput" placeholder="🔍 Search events...">

        <select id="categoryFilter">
            <option value="all">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
        </select>

        <input type="date" id="dateFilter">
    </div>

    <div id="eventGrid" class="event-grid"></div>
</section>

<!-- CATEGORIES -->
<section class="section category-section">
    <div class="section-heading">
        <div>
            <span class="section-label">DISCOVER</span>
            <h2>Event Categories</h2>
        </div>
    </div>

    <div class="category-grid">
        <div class="category-card" onclick="filterCategory('Technology')">
            <div>💻</div>
            <h3>Technology</h3>
            <p>Hackathons & coding</p>
        </div>

        <div class="category-card" onclick="filterCategory('Cultural')">
            <div>🎭</div>
            <h3>Cultural</h3>
            <p>Fests & performances</p>
        </div>

        <div class="category-card" onclick="filterCategory('Sports')">
            <div>🏆</div>
            <h3>Sports</h3>
            <p>Games & tournaments</p>
        </div>

        <div class="category-card" onclick="filterCategory('Workshop')">
            <div>🎓</div>
            <h3>Workshops</h3>
            <p>Learn & grow</p>
        </div>
    </div>
</section>

<!-- MY REGISTRATIONS -->
<section id="registrations" class="section">
    <div class="section-heading">
        <div>
            <span class="section-label">YOUR ACTIVITY</span>
            <h2>My Registrations</h2>
        </div>
    </div>

    <div id="registrationList">
        <p class="empty-message">
            You haven't registered for any events yet.
        </p>
    </div>
</section>

<!-- CALENDAR -->
<section id="calendar" class="section">
    <div class="section-heading">
        <div>
            <span class="section-label">SCHEDULE</span>
            <h2>Event Calendar</h2>
        </div>
    </div>

    <div class="calendar-box">
        <div class="calendar-header">
            <button onclick="changeMonth(-1)">‹</button>
            <h3 id="calendarMonth"></h3>
            <button onclick="changeMonth(1)">›</button>
        </div>

        <div class="calendar-grid" id="calendarGrid"></div>
    </div>
</section>

<!-- ANNOUNCEMENTS -->
<section id="announcements" class="section announcements">
    <div class="section-heading">
        <div>
            <span class="section-label">CAMPUS NEWS</span>
            <h2>Announcements</h2>
        </div>
    </div>

    <div class="announcement-list">
        <article class="announcement">
            <div class="announcement-icon">📢</div>
            <div>
                <span>September 8, 2026</span>
                <h3>TechFest 2026 registrations are now open</h3>
                <p>
                    Students can register for coding, robotics and
                    innovation competitions.
                </p>
            </div>
        </article>

        <article class="announcement">
            <div class="announcement-icon">🎓</div>
            <div>
                <span>September 6, 2026</span>
                <h3>AI & Machine Learning Workshop</h3>
                <p>Seats are limited. Register before September 12.</p>
            </div>
        </article>

        <article class="announcement">
            <div class="announcement-icon">🎭</div>
            <div>
                <span>September 4, 2026</span>
                <h3>Annual Cultural Fest announced</h3>
                <p>
                    Prepare for three days of music, dance, drama
                    and competitions.
                </p>
            </div>
        </article>
    </div>
</section>

<!-- STUDENT PROFILE -->
<section id="profile" class="section">
    <div class="section-heading">
        <div>
            <span class="section-label">ACCOUNT</span>
            <h2>Student Profile</h2>
        </div>
    </div>

    <div class="profile-card">
        <div class="profile-avatar">ST</div>

        <div class="profile-info">
            <h2 id="profileName">Student Name</h2>

            <p>
                Student ID:
                <strong id="profileId">Not available</strong>
            </p>

            <p>
                Course:
                <strong id="profileCourse">Not available</strong>
            </p>

            <p>
                Semester:
                <strong id="profileSemester">Not available</strong>
            </p>

            <p>
                Email:
                <strong id="profileEmail">Not available</strong>
            </p>

            <button class="primary-btn" onclick="editProfile()">
                Edit Profile
            </button>
        </div>
    </div>
</section>

<!-- ADMIN DASHBOARD -->
<section id="admin" class="section">
    <div class="section-heading">
        <div>
            <span class="section-label">MANAGEMENT</span>
            <h2>Admin Dashboard</h2>
        </div>
    </div>

    <div class="admin-stats">
        <div><span>Students</span><strong>2,500</strong></div>
        <div><span>Events</span><strong id="adminEvents">48</strong></div>
        <div>
            <span>Registrations</span>
            <strong id="adminRegistrations">1,248</strong>
        </div>
        <div><span>Upcoming</span><strong>12</strong></div>
    </div>

    <div class="admin-panel">
        <h3>Add New Event</h3>

        <input id="newEventName" placeholder="Event name">
        <input id="newEventDate" type="date">
        <input id="newEventVenue" placeholder="Venue">

        <select id="newEventCategory">
            <option>Technology</option>
            <option>Cultural</option>
            <option>Sports</option>
            <option>Workshop</option>
        </select>

        <button class="primary-btn" onclick="addEvent()">
            + Add Event
        </button>
    </div>
</section>

`;

export default function App() {
    return (
        <div
            style={{ display: 'contents' }}
            dangerouslySetInnerHTML={{ __html: originalHomeMarkup }}
        />
    );
}
