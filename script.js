let events = JSON.parse(localStorage.getItem("campusEvents")) || [

    {
        id: 1,
        name: "TechFest 2026",
        date: "2026-09-15",
        time: "10:00 AM",
        venue: "Innovation Center",
        category: "Technology",
        organizer: "Computer Science Club",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        description:
            "A technology festival featuring coding competitions, robotics and innovation challenges."
    },

    {
        id: 2,
        name: "Annual Cultural Fest",
        date: "2026-09-20",
        time: "5:00 PM",
        venue: "Main Auditorium",
        category: "Cultural",
        organizer: "Cultural Society",
        image:
            "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
        description:
            "A celebration of music, dance, theatre, fashion and student creativity."
    },

    {
        id: 3,
        name: "Inter College Football",
        date: "2026-09-18",
        time: "3:00 PM",
        venue: "College Sports Ground",
        category: "Sports",
        organizer: "Sports Committee",
        image:
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
        description:
            "Inter-college football tournament featuring teams from across the region."
    },

    {
        id: 4,
        name: "AI & ML Workshop",
        date: "2026-09-24",
        time: "11:00 AM",
        venue: "Seminar Hall B",
        category: "Workshop",
        organizer: "AI Society",
        image:
            "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
        description:
            "Hands-on workshop covering machine learning, artificial intelligence and practical projects."
    },

    {
        id: 5,
        name: "Photography Walk",
        date: "2026-09-27",
        time: "8:00 AM",
        venue: "College Main Gate",
        category: "Cultural",
        organizer: "Photography Club",
        image:
            "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80",
        description:
            "Explore campus photography techniques with fellow photography enthusiasts."
    },

    {
        id: 6,
        name: "Coding Challenge",
        date: "2026-10-02",
        time: "2:00 PM",
        venue: "Computer Lab 4",
        category: "Technology",
        organizer: "Coding Club",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
        description:
            "Solve challenging programming problems and compete with the best student developers."
    }

];


document.addEventListener("DOMContentLoaded", function () {

    let progress = 0;

    const progressBar =
        document.getElementById("progressBar");

    const progressText =
        document.getElementById("progressText");

    const loadingScreen =
        document.getElementById("loadingScreen");

    const loginPage =
        document.getElementById("loginPage");

    const portal =
        document.getElementById("portal");


    /* EXACTLY 3 SECONDS */

    const startTime = Date.now();

    const loadingInterval = setInterval(function () {

        const elapsed = Date.now() - startTime;

        progress = Math.min(
            100,
            Math.floor((elapsed / 3000) * 100)
        );

        progressBar.style.width = progress + "%";

        progressText.textContent =
            progress + "%";


        if (elapsed >= 3000) {

            clearInterval(loadingInterval);

            loadingScreen.style.opacity = "0";

            setTimeout(function () {

                loadingScreen.classList.add("hidden");

                loginPage.classList.remove("hidden");

            }, 400);

        }

    }, 30);


    setupLogin();

    setupRegister();

    setupPasswordToggle();

    setupSearch();

    setupTheme();

    setupHamburger();

    renderEvents();

    renderRegistrations();

    renderCalendar();

});


function setupLogin() {

    const form =
        document.getElementById("loginForm");


    form.addEventListener("submit", function (e) {

        e.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value.trim();

        if (email === "" || password === "") {

            showToast(
                "Please enter your email/student ID and password."
            );

            return;
        }


        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "currentUser",
            email
        );


        document
            .getElementById("loginPage")
            .classList.add("hidden");


        document
            .getElementById("portal")
            .classList.remove("hidden");


        showToast(
            "Login successful! Welcome to CampusConnect."
        );

    });

}


function setupRegister() {

    const form =
        document.getElementById("registerForm");


    form.addEventListener("submit", function (e) {

        e.preventDefault();


        const password =
            document.getElementById("regPassword").value;

        const confirm =
            document.getElementById("regConfirm").value;


        if (password.length < 6) {

            showToast(
                "Password must contain at least 6 characters."
            );

            return;
        }


        if (password !== confirm) {

            showToast(
                "Passwords do not match."
            );

            return;
        }


        showToast(
            "Account created successfully!"
        );


        showLogin();

    });

}

function showRegister() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("registerPage")
        .classList.remove("hidden");

}


function showLogin() {

    document
        .getElementById("registerPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


function forgotPassword() {

    showToast(
        "Demo portal: password reset is not connected to a backend."
    );

}

function setupPasswordToggle() {

    const button =
        document.getElementById("togglePassword");

    const password =
        document.getElementById("loginPassword");


    button.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";

            button.textContent = "🙈";

        } else {

            password.type = "password";

            button.textContent = "👁";

        }

    });

}


function renderEvents(list = events) {

    const grid =
        document.getElementById("eventGrid");


    if (!grid) return;


    grid.innerHTML = "";


    if (list.length === 0) {

        grid.innerHTML = `
            <p class="empty-message">
                No events found.
            </p>
        `;

        return;
    }


    list.forEach(function (event) {

        const card =
            document.createElement("article");


        card.className = "event-card";


        card.innerHTML = `

            <img
                class="event-image"
                src="${event.image}"
                alt="${event.name}"
            >

            <div class="event-content">

                <span class="event-category">
                    ${event.category}
                </span>

                <h3>
                    ${event.name}
                </h3>

                <div class="event-meta">

                    <span>
                        📅 ${formatDate(event.date)}
                    </span>

                    <span>
                        🕐 ${event.time}
                    </span>

                    <span>
                        📍 ${event.venue}
                    </span>

                </div>

                <p class="event-description">
                    ${event.description}
                </p>

                <button
                    class="register-event"
                    onclick="openEvent(${event.id})"
                >
                    View Details
                </button>

            </div>

        `;


        grid.appendChild(card);

    });

}

function openEvent(id) {

    const event =
        events.find(e => e.id === id);


    if (!event) return;


    document.getElementById("modalImage").src =
        event.image;


    document.getElementById("modalImage").alt =
        event.name;


    document.getElementById("modalCategory")
        .textContent =
        event.category;


    document.getElementById("modalTitle")
        .textContent =
        event.name;


    document.getElementById("modalDate")
        .textContent =
        "📅 Date: " + formatDate(event.date);


    document.getElementById("modalTime")
        .textContent =
        "🕐 Time: " + event.time;


    document.getElementById("modalVenue")
        .textContent =
        "📍 Venue: " + event.venue;


    document.getElementById("modalOrganizer")
        .textContent =
        "👤 Organizer: " + event.organizer;


    document.getElementById("modalDescription")
        .textContent =
        event.description;


    document.getElementById("modalRegisterBtn")
        .onclick =
        function () {

            registerEvent(event.id);

        };


    document
        .getElementById("eventModal")
        .classList.remove("hidden");

}


function closeModal() {

    document
        .getElementById("eventModal")
        .classList.add("hidden");

}

function registerEvent(id) {

    let registrations =
        JSON.parse(
            localStorage.getItem("registrations")
        ) || [];


    if (registrations.includes(id)) {

        showToast(
            "You are already registered for this event."
        );

        return;
    }


    registrations.push(id);


    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );


    renderRegistrations();

    closeModal();


    showToast(
        "Successfully registered for the event!"
    );

}

function renderRegistrations() {

    const container =
        document.getElementById("registrationList");


    if (!container) return;


    const registrations =
        JSON.parse(
            localStorage.getItem("registrations")
        ) || [];


    if (registrations.length === 0) {

        container.innerHTML = `
            <p class="empty-message">
                You haven't registered for any events yet.
            </p>
        `;

        return;
    }


    container.innerHTML = "";


    registrations.forEach(function (id) {

        const event =
            events.find(e => e.id === id);


        if (!event) return;


        const card =
            document.createElement("div");


        card.className =
            "registration-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${event.name}
                </h3>

                <p>
                    📅 ${formatDate(event.date)}
                </p>

                <p>
                    📍 ${event.venue}
                </p>

            </div>

            <span class="status">
                Registered
            </span>

            <button
                class="cancel-btn"
                onclick="cancelRegistration(${event.id})"
            >
                Cancel
            </button>

        `;


        container.appendChild(card);

    });

}


function cancelRegistration(id) {

    let registrations =
        JSON.parse(
            localStorage.getItem("registrations")
        ) || [];


    registrations =
        registrations.filter(
            eventId => eventId !== id
        );


    localStorage.setItem(
        "registrations",
        JSON.stringify(registrations)
    );


    renderRegistrations();


    showToast(
        "Registration cancelled."
    );

}

function setupSearch() {

    const search =
        document.getElementById("searchInput");

    const category =
        document.getElementById("categoryFilter");

    const date =
        document.getElementById("dateFilter");


    function filter() {

        const searchValue =
            search.value.toLowerCase();


        const categoryValue =
            category.value;


        const dateValue =
            date.value;


        const filtered =
            events.filter(function (event) {

                const matchesSearch =
                    event.name
                        .toLowerCase()
                        .includes(searchValue);


                const matchesCategory =
                    categoryValue === "all" ||
                    event.category === categoryValue;


                const matchesDate =
                    dateValue === "" ||
                    event.date === dateValue;


                return (
                    matchesSearch &&
                    matchesCategory &&
                    matchesDate
                );

            });


        renderEvents(filtered);

    }


    search.addEventListener("input", filter);

    category.addEventListener("change", filter);

    date.addEventListener("change", filter);

}


function filterCategory(category) {

    document.getElementById("categoryFilter").value =
        category;


    document.getElementById("searchInput").value =
        "";


    const filtered =
        events.filter(
            event => event.category === category
        );


    renderEvents(filtered);


    document
        .getElementById("events")
        .scrollIntoView({
            behavior: "smooth"
        });

}

let currentCalendarDate =
    new Date(2026, 8, 1);


function renderCalendar() {

    const grid =
        document.getElementById("calendarGrid");

    const title =
        document.getElementById("calendarMonth");


    if (!grid || !title) return;


    const year =
        currentCalendarDate.getFullYear();


    const month =
        currentCalendarDate.getMonth();


    const monthName =
        currentCalendarDate.toLocaleString(
            "default",
            {
                month: "long"
            }
        );


    title.textContent =
        monthName + " " + year;


    grid.innerHTML = "";


    const days =
        new Date(year, month + 1, 0)
            .getDate();


    const firstDay =
        new Date(year, month, 1)
            .getDay();


    const names =
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    names.forEach(function (name) {

        const div =
            document.createElement("div");

        div.innerHTML =
            `<strong>${name}</strong>`;

        grid.appendChild(div);

    });


    for (let i = 0; i < firstDay; i++) {

        const blank =
            document.createElement("div");

        grid.appendChild(blank);

    }


    for (let day = 1; day <= days; day++) {

        const div =
            document.createElement("div");


        div.className =
            "calendar-day";


        const dateString =
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;


        const event =
            events.find(
                e => e.date === dateString
            );


        div.innerHTML = `
            <strong>${day}</strong>
            ${event
                ? `<br><small>${event.name}</small>`
                : ""}
        `;


        if (event) {

            div.classList.add(
                "event-day"
            );

        }


        grid.appendChild(div);

    }

}


function changeMonth(direction) {

    currentCalendarDate.setMonth(
        currentCalendarDate.getMonth() + direction
    );


    renderCalendar();

}

function editProfile() {

    const currentName =
        document.getElementById("profileName")
            .textContent;


    const name =
        prompt(
            "Enter your name:",
            currentName
        );


    if (!name || name.trim() === "") return;


    document.getElementById("profileName")
        .textContent =
        name;


    localStorage.setItem(
        "profileName",
        name
    );


    showToast(
        "Profile updated successfully."
    );

}

function addEvent() {

    const name =
        document.getElementById("newEventName")
            .value.trim();


    const date =
        document.getElementById("newEventDate")
            .value;


    const venue =
        document.getElementById("newEventVenue")
            .value.trim();


    const category =
        document.getElementById("newEventCategory")
            .value;


    if (
        name === "" ||
        date === "" ||
        venue === ""
    ) {

        showToast(
            "Please fill all event fields."
        );

        return;
    }


    const newEvent = {

        id: Date.now(),

        name: name,

        date: date,

        time: "10:00 AM",

        venue: venue,

        category: category,

        organizer: "CampusConnect Admin",

        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",

        description:
            "A new college event created through the CampusConnect admin dashboard."

    };


    events.push(newEvent);


    localStorage.setItem(
        "campusEvents",
        JSON.stringify(events)
    );


    renderEvents();

    renderCalendar();


    document.getElementById("newEventName")
        .value = "";

    document.getElementById("newEventDate")
        .value = "";

    document.getElementById("newEventVenue")
        .value = "";


    document.getElementById("adminEvents")
        .textContent =
        events.length;


    showToast(
        "Event added successfully!"
    );

}

function setupHamburger() {

    const hamburger =
        document.getElementById("hamburger");

    const nav =
        document.getElementById("navLinks");


    hamburger.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "active"
            );

        }
    );


    nav.querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    nav.classList.remove(
                        "active"
                    );

                }
            );

        });

}

function setupTheme() {

    const button =
        document.getElementById("themeToggle");


    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        button.textContent = "☀️";

    }


    button.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const dark =
                document.body.classList.contains(
                    "dark"
                );


            localStorage.setItem(
                "theme",
                dark ? "dark" : "light"
            );


            button.textContent =
                dark ? "☀️" : "🌙";

        }
    );

}

function logout() {

    localStorage.removeItem(
        "loggedIn"
    );


    document
        .getElementById("portal")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");


    document.getElementById("loginEmail")
        .value = "";


    document.getElementById("loginPassword")
        .value = "";


    showToast(
        "You have been logged out."
    );

}

function scrollToEvents() {

    document
        .getElementById("events")
        .scrollIntoView({
            behavior: "smooth"
        });

}

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    const text =
        document.getElementById("toastMessage");


    text.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(function () {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}


function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "numeric",
            month: "short",
            year: "numeric"
        }
    );

}
