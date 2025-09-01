import libimg from "../assets/lib.png";
import lmsimg from "../assets/mvlms.png";
import clinicimg from "../assets/mvclinic.png";
import meditroimg from "../assets/meditro.png";
import kibsimg from "../assets/kibs.png";
import hidayaimg from "../assets/hidaya.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import react1 from "../assets/react1.png";
import restraunt from "../assets/restraunt.png";
import todo from "../assets/todoreact.png";
import xo from "../assets/xo.png";
import movie from "../assets/movie.png";
import interior from "../assets/interior.png";
import hangman from "../assets/hangman.png";
import food from "../assets/food.png";
import bootstrap from "../assets/bootstrap.png";
import ameen from "../assets/ameen.png";
export const projects = [
  {
    id: 1,
    img: libimg,
    name: "MVLib",
    title: "Online Library Management System",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7361809997564968960?compact=1",
    type: "Managment System",
    github: "https://github.com/ameenmv/MVLibrary",
    Description:
      "MVLib is a complete online library management system designed to handle books and student operations seamlessly.It was developed as my final project during the ITI internship, where I faced real challenges and deep research opportunities. The UI & UX were fully designed by me, and the whole system was built from scratch using Vue.js and Laravel. It provides a powerful admin dashboard and a flexible student module to simplify the borrowing and returning process.",
    Technologies: "Frontend: Vue.js, Tailwind CSS, Vuelidate, Pinia, Axios",
    Highlights: [
      "Built a fully functional library management system with a modern UI using Vue.js and Tailwind CSS",
      "Developed an Admin Dashboard to manage books and students (add/delete books, track students, manage borrowings)",
      "Implemented Authorization so that only admins can perform sensitive tasks",
      "Enabled students to register, borrow books, and manage their own profiles with ease",
      "Added a Student Dashboard to track borrowed books and their return deadlines",
      "Designed with scalability in mind (future-ready for features like online payments and notifications)",
      "Secured backend with Laravel Sanctum, ORM, and RESTful API to connect with the frontend",
      "Used MySQL database for efficient storage and retrieval of books and student records",
    ],
  },
  // ضيف بروجيكت threee.js

  {
    id: 2,
    img: lmsimg,
    name: "MV LMS",
    title: "Learning Management System",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7353485662030831616?compact=1",
    type: "Managment System",
    github: "https://github.com/ameenmv/mv-lms",
    Description:
      "MV LMS is a fully frontend-based Learning Management System where I built the entire logic and UI using Vue.js. The project is powered by simple mock APIs (plain text data from MockAPI free plan), but all the system logic, state handling, and user flows were designed and implemented completely on the frontend. Unlike my other projects where I focused heavily on design, this one highlights my logic-building skills and ability to handle complex data flow on the frontend. The system enables: Teachers to upload and manage lessons. Students to view available lessons. Admins to manage lessons and users (including deletion). This project reflects my structured thinking and problem-solving approach in frontend development.",
    Technologies: "Vue.js, Tailwind CSS, Axios",
    Highlights: [
      "Built a complete LMS system frontend with Vue.js.",
      "Implemented mock API integration using Axios to simulate real backend interactions.",
      "Designed role-based flows (Teacher, Student, Admin).",
      "Focused on system logic and data handling more than UI design.",
      "Wrote clean, structured, and reusable code for scalability.",
      "Demonstrated strong frontend problem-solving skills beyond styling.",
    ],
  },
  {
    id: 3,
    img: clinicimg,
    name: "MVClinic",
    title: "Clinic Appointment System",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7350590369543143424?compact=1",
    type: "Appointment System",
    github: "https://github.com/ameenmv/mvclinic",
    Description:
      "MVClinic is a simple Clinic Appointment System built entirely on the frontend. It allows patients to easily book appointments with doctors, while doctors can quickly accept or reject requests through the interface. This version uses static JSON data for simulating the backend. I originally planned a more advanced platform with richer features, but decided to wrap up this lightweight version as a clean demonstration of functionality.",
    Technologies: "Vue.js • Tailwind CSS • Pinia",
    Highlights: [
      "Built a frontend-only clinic system with Vue.js.",
      "Used static JSON data to simulate appointment management.",
      "Patients can request doctor appointments through the interface.",
      "Doctors can accept or reject appointments with a simple workflow.",
      "Focused on clear functionality and straightforward UI/UX.",
      "Laid the foundation for expanding into a full-stack healthcare system in the future.",
    ],
  },
  {
    id: 4,
    img: meditroimg,
    name: "Meditro",
    title: "Responsive Medical Website",
    title: "Clinic Appointment System",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7339633460149403648?compact=1",
    type: "Medical Website",
    website: "https://meditroo.netlify.app/",
    github: "https://github.com/ameenmv/meditroo",
    Description:
      "Meditro is a responsive medical website built with Vue.js and Tailwind CSS. I created this project as a way to apply my newly learned Tailwind skills after dedicating a week to studying it. The main focus was on practicing responsive design, utility-first styling, and integrating Tailwind effectively into a Vue.js project.",
    Technologies: "vue.js , Tailwind",
    Highlights: [
      "Built a modern responsive medical website using Vue.js.",
      "Applied Tailwind CSS utility-first classes for rapid styling.",
      "Focused on responsive layouts for desktop, tablet, and mobile.",
      "Practiced clean structure and scalable design techniques.",
      "Served as a learning-by-doing project to strengthen Tailwind fundamentals.",
    ],
  },
  {
    id: 5,
    img: kibsimg,
    name: "KIIIBS",
    title: "Responsive Online Store",

    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7304846261432569856?compact=1",
    type: "Online Store",
    website: "https://kiiibs.netlify.app/",
    github: "https://github.com/ameenmv/kiiibs",
    Description:
      "KIIIBS is a responsive e-commerce website I developed completely from scratch without using any external design libraries. This project helped me sharpen my problem-solving and searching skills, as I built it entirely on my own while handling every detail of the UI and system logic. The project simulates a real online store with cart functionality, form validation, and responsive design, all powered by Vue.js.",
    Highlights: [
      "Built a fully functional online store with modern UI and responsive design.",
      "Implemented Pinia for managing the cart system and state management.",
      "Added form validation using Vuelidate for a smooth user experience.",
      "Designed and coded without relying on any external UI libraries, improving my raw design skills.",
      "Enhanced my search and self-learning ability by solving challenges independently.",
    ],
    Technologies: "vue js, pinia, vuelidate",
  },
  {
    id: 6,
    img: hidayaimg,
    name: "Hidaaya",
    title: "Responsive Islamic Website",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7312433812859203584?compact=1",
    type: "Islamic Website",
    website: "https://ameenmv.github.io/Hidaaya/",
    github: "https://github.com/ameenmv/Hidaaya",
    Description:
      "Hidaaya is a responsive Islamic website that serves as a guide to prayer times, the Quran, and supplications. I designed the entire UI/UX myself, taking inspiration from a few Islamic websites while still crafting a unique look and feel. This project was built completely with HTML, CSS, and JavaScript, focusing on clean design, smooth interactions, and delivering a spiritual, user-friendly experience.",
    Technologies: "HTML, CSS, JS",
    Highlights: [
      "Developed a fully responsive Islamic website from scratch.",
      "Designed a custom UI tailored to the theme of spirituality and simplicity.",
      "Integrated prayer times, Quran access, and supplications as core features.",
      "Practiced HTML, CSS, and vanilla JavaScript to handle design and interactions.",
      "Took inspiration from existing Islamic websites but created a unique visual identity.",
    ],
  },
  {
    id: 7,
    img: ameen,
    name: "MV",
    title: "Previous Portfolio Website",
    video:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7328019292556333058?compact=1",
    type: "Portfolio Website",
    website: "https://ameeenmv.netlify.app/",
    github: "https://github.com/ameenmv/mv",
    Description:
      "Finally, I finished the first version of my personal portfolio website! I built it completely with Vue.js and Bootstrap, making it fully responsive across all devices. The site includes a contact form that directly sends submitted messages to my email. I consider this version the starting point, and I plan to update it later with a new structure and design improvements.",
    Technologies: "vue.js, bootstrap",
    Highlights: [
      "Built entirely using Vue.js with Bootstrap for styling and responsiveness.",
      "Fully responsive design to adapt to all screen sizes.",
      "Implemented a functional contact form that sends messages directly to email.",
      "First deployed version of my portfolio, with plans for future upgrades and restructuring.",
    ],
  },
  {
    id: 8,
    img: interior,
    name: "Interior Design",
    title: "Responsive Design Website",
    type: "Design Website",
    website: "https://ameenmv.github.io/interior-design/",
    github: "https://github.com/ameenmv/interior-design",
    //  اكتب ديسكريبشن بقا من اول هنا لحد تحت
    Technologies: "HTML, CSS",
    Description:
      "This project was a simple training exercise I created to improve my HTML & CSS skills. I focused on building a clean and well-structured template, applying what I had learned, and practicing layout techniques. Although it was meant as a practice project, the result turned out neat and visually appealing.",
    Highlights: [
      "Practiced HTML structuring and CSS styling to strengthen my fundamentals.",
      "Designed and implemented a clean template layout.",
      "Improved my confidence in writing semantic HTML and reusable CSS.",
      "A great step forward in my journey to becoming more fluent in frontend development.",
    ],
  },
  {
    id: 9,
    img: movie,
    name: "Movie App",
    title: "Movie Database Website",
    type: "Movies Website",
    website: "https://moviesdbb.netlify.app/",
    github: "https://github.com/ameenmv/moviesDB-react",
    Description:
      "This project is a movie database website where I fetched and displayed movie data inside cards, showing details for each film. I also implemented a search functionality so users can quickly find specific movies. For the layout, I used Bootstrap to organize the cards and ensure a clean responsive design, while React handled the dynamic rendering and state management.",
    Highlights: [
      "Fetched and displayed movie data dynamically with React.",
      "Implemented a search feature to easily find specific movies.",
      "Used Bootstrap to design responsive, well-structured movie cards.",
      "Strengthened my skills in combining UI frameworks with React state management.",
    ],

    Technologies: "React.js, Bootstrap, Axios",
  },
  {
    id: 10,
    img: restraunt,
    name: "Restaurant",
    title: "Restaurant Menu Website",
    type: "Menu Website",
    github: "https://github.com/ameenmv/react2",
    Description:
      "This project is a simple restaurant menu website built with React. I designed the menu layout using Bootstrap to ensure a clean and responsive interface. The system allows filtering menu items by categories as well as searching by name, making it easy for users to find specific dishes quickly. This project was a great practice in combining React’s state management with UI interactions.",
    Highlights: [
      "Developed a responsive restaurant menu layout using Bootstrap.",
      "Implemented category-based filtering for menu items.",
      "Added a search functionality to quickly find dishes by name.",
      "Practiced handling state and dynamic rendering in React.",
    ],

    Technologies: "React.js, Bootstrap",
  },
  {
    id: 11,
    img: react1,
    name: "React Project",
    title: "Small Appointments Website",
    type: "Appointments Website",
    github: "https://github.com/ameenmv/react1",
    Description:
      "This project is a small training exercise where I built a simple appointments website. The data was written manually and displayed in a clean layout, with the ability to delete appointments dynamically. Although it’s a small project, it was a great way to practice handling lists, rendering data, and applying interactivity in React.",
    Highlights: [
      "Created a simple appointments system with add/remove functionality.",
      "Displayed appointment data dynamically on the UI.",
      "Practiced working with React state and event handling.",
      "A small but effective project to strengthen fundamentals of React interactivity.",
    ],

    Technologies: "React.js, Bootstrap",
  },
  {
    id: 12,
    img: todo,
    name: "Todo App",
    title: "Small Todo Website",
    type: "Todolist Website",
    github: "https://github.com/ameenmv/to-do-list-react",
    Description:
      "This project is a simple Todo List application built with React. It allows users to add tasks and remove them dynamically. Even though it’s a small project, it helped me practice starting a React project from scratch, understanding component structure, and handling state effectively.",
    Highlights: [
      "Built a functional Todo List app with add and delete features.",
      "Practiced initializing and structuring a React project.",
      "Gained experience with state management and event handling in React.",
      "A simple yet valuable step in getting comfortable with React development.",
    ],
    Technologies: "React.js",
  },
  {
    id: 13,
    img: hangman,
    name: "Hangman",
    title: "Hangman Game",
    type: "Game Website",
    website: "https://ameenmv.github.io/hangman-game/",
    github: "https://github.com/ameenmv/hangman-game",
    Description:
      "This project is a classic Hangman Game built with HTML, CSS, and JavaScript. The player has to guess the hidden word within a limited number of attempts. The game provides hints about the category (movies, countries, programming, etc.), and each wrong guess completes part of the hangman drawing. I also added sound effects to enhance the experience — one for winning and another for losing.",
    Highlights: [
      "Developed a fully functional Hangman game using pure HTML, CSS, and JavaScript.",
      "Implemented category-based hints to guide the player.",
      "Added sound effects for win/lose conditions to improve user experience.",
      "Built a dynamic virtual keyboard for user interaction.",
      "Enhanced logic handling for multiple attempts and real-time word guessing.",
    ],

    Technologies: "HTML, CSS, JS",
  },
  {
    id: 14,
    img: xo,
    name: "X-O",
    title: "X-O Game",
    type: "Game Website",
    website: "https://ameenmv.github.io/xo-game/",
    github: "https://github.com/ameenmv/xo-game",
    Description:
      "This project is a simple Tic-Tac-Toe (XO) game built with HTML, CSS, and JavaScript. Two players can take turns placing their marks (X or O) on a 3x3 grid, and the game automatically detects the winner or a draw. Although it’s a classic beginner project, it helped me practice game logic, DOM manipulation, and interactive UI building.",
    Highlights: [
      "Created a fully playable Tic-Tac-Toe game with HTML, CSS, and JavaScript.",
      "Implemented game logic to check for wins, draws, and player turns.",
      "Practiced DOM manipulation for dynamic board updates.",
      "Improved understanding of handling user interactions and conditional rendering.",
      "A great exercise in building small interactive games from scratch.",
    ],

    Technologies: "HTML, CSS, JS",
  },
  {
    id: 15,
    img: food,
    name: "Food Lover",
    title: "Responsive Food Website",
    type: "Food Website",
    website: "https://ameenmv.github.io/foodLover-html-css/",
    github: "https://github.com/ameenmv/foodLover-html-css",
    Description:
      "Food Lover is a static website built with HTML and CSS, designed to practice and improve my frontend styling skills. In this project, I focused heavily on layout techniques such as CSS Grid and Flexbox to create a clean and modern design. The project was a great exercise in refining my CSS fundamentals while building a visually appealing food-themed template.",
    Highlights: [
      "Built a responsive website layout using pure HTML and CSS.",
      "Practiced advanced CSS techniques such as Grid and Flexbox.",
      "Focused on clean design and structured code organization.",
      "Improved confidence in creating modern website templates without frameworks.",
      "Enhanced my ability to design and style user-friendly static pages.",
    ],

    Technologies: "HTML, CSS",
  },
  {
    id: 16,
    img: bootstrap,
    name: "Bondi",
    title: "Responsive Bootstrap Website",
    type: "Bootstrap Website",
    website: "https://ameenmv.github.io/html-css-bootstrab/",
    github: "https://github.com/ameenmv/html-css-bootstrab",
    Description:
      "This project is a simple practice website I built to apply what I had learned with Bootstrap. I experimented with Bootstrap’s grid system, components, and utilities to structure a responsive layout and design a clean template. It was a great step in becoming more comfortable with rapid UI development using Bootstrap.",
    Highlights: [
      "Applied Bootstrap grid system to create a fully responsive layout.",
      "Practiced using Bootstrap components like navbar, cards, and buttons.",
      "Strengthened my understanding of Bootstrap utilities for styling and spacing.",
      "Built a clean and modern template to reinforce my frontend development skills.",
    ],

    Technologies: "HTML, CSS, Bootstrab",
  },
  {
    id: 17,
    img: project4,
    name: "Project 4",
    title: "Responsive Website",
    type: "Responsive Website",
    website: "https://ameenmv.github.io/special_design/",
    github: "https://github.com/ameenmv/special_design",
    Description:
      "This project is a beautifully designed website I created to further improve my HTML, CSS, and JavaScript skills. I implemented interactive features such as changing text colors, generating random backgrounds with the option to pause them, and resetting settings. It was a fun way to practice DOM manipulation while also focusing on aesthetics and usability.",
    Highlights: [
      "Strengthened my HTML, CSS, and JavaScript fundamentals through practical application.",
      "Added interactive functions for color changes, random backgrounds, and reset options.",
      "Practiced DOM manipulation and event handling in JavaScript.",
      "Focused on combining clean design with engaging user interaction.",
    ],

    Technologies: "HTML, CSS, JS",
  },
  {
    id: 18,
    img: project3,
    name: "Project 3",
    title: "Responsive Animation Website",
    type: "Responsive Website",
    website: "https://ameenmv.github.io/project3-html-css/",
    github: "https://github.com/ameenmv/project3-html-css",
    Description:
      "This was my third project ever, created as part of my journey to strengthen my CSS skills. I focused heavily on experimenting with CSS animations and transitions to bring the design to life. It was a small but valuable step that helped me build more confidence in creating visually engaging websites.",
    Highlights: [
      "Practiced advanced CSS styling techniques, especially animations and transitions.",
      "Improved my understanding of how to add motion and interactivity with pure CSS.",
      "Built a project that boosted both my creativity and technical skills.",
      "An important milestone in my early frontend development journey.",
    ],

    Technologies: "HTML, CSS",
  },
  {
    id: 19,
    img: project2,
    name: "Project 2",
    title: "Responsive Website",
    type: "Responsive Website",
    website: "https://ameenmv.github.io/project2-html-css/",
    github: "https://github.com/ameenmv/project2-html-css",
    Description:
      "This was my second project, created to continue developing my HTML & CSS skills. I focused on applying the basics I had learned, building a clean structure, and experimenting with different styling techniques to gain more confidence in frontend development.",
    Highlights: [
      "Strengthened my foundation in HTML & CSS through hands-on practice.",
      "Built a well-structured static webpage with organized layout and styling.",
      "Improved my ability to turn ideas into functional web pages.",
      "Another key step forward in building consistency and confidence as a frontend developer.",
    ],

    Technologies: "HTML, CSS",
  },
  {
    id: 20,
    img: project1,
    name: "Project 1",
    title: "Responsive Website",
    type: "Responsive Website",
    website: "https://ameenmv.github.io/project1-html-css/",
    github: "https://github.com/ameenmv/project1-html-css",
    Description:
      "My first design project after a long learning journey in mastering the fundamentals of HTML & CSS. This project reflects the concepts I studied and my first step into applying them in a real design.",
    Technologies: "HTML, CSS",
    Highlights: [
      "Built using pure HTML & CSS to strengthen core web fundamentals.",
      "Practiced responsive layouts with Flexbox and CSS Grid.",
      "Applied modern styling techniques (transitions, hover effects, clean structure).",
      "Marked the starting point of my practical front-end journey.",
    ],
  },
];
