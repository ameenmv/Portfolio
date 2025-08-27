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
    Highlight: [
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

  {
    id: 2,
    img: lmsimg,
    name: "MV LMS",
    title: "Learning Management System",
  },
  {
    id: 3,
    img: clinicimg,
    name: "MVClinic",
    title: "Clinic Appointment System",
  },
  {
    id: 4,
    img: meditroimg,
    name: "Meditro",
    title: "Responsive Medical Website",
  },
  {
    id: 5,
    img: kibsimg,
    name: "KIIIBS",
    title: "Responsive Online Store",
  },
  {
    id: 6,
    img: hidayaimg,
    name: "Hidaaya",
    title: "Responsive Islamic Website",
  },
  {
    id: 7,
    img: ameen,
    name: "MV",
    title: "Previous Portfolio Website",
  },
  {
    id: 8,
    img: interior,
    name: "Interior Design",
    title: "Responsive Design Website",
  },
  {
    id: 9,
    img: movie,
    name: "Movie App",
    title: "Movie Database Website",
  },
  {
    id: 10,
    img: restraunt,
    name: "Restaurant",
    title: "Restaurant Menu Website",
  },
  {
    id: 11,
    img: react1,
    name: "React Project",
    title: "Small Appointments Website",
  },
  {
    id: 12,
    img: todo,
    name: "Todo App",
    title: "Small Todo Website",
  },
  {
    id: 13,
    img: hangman,
    name: "Hangman",
    title: "Hangman Game",
  },
  {
    id: 14,
    img: xo,
    name: "X-O",
    title: "X-O Game",
  },
  {
    id: 15,
    img: food,
    name: "Food Lover",
    title: "Responsive Food Website",
  },
  {
    id: 16,
    img: bootstrap,
    name: "Bondi",
    title: "Responsive Bootstrap Website",
  },
  {
    id: 17,
    img: project4,
    name: "Project 4",
    title: "Responsive Website",
  },
  {
    id: 18,
    img: project3,
    name: "Project 3",
    title: "Responsive Animation Website",
  },
  {
    id: 19,
    img: project2,
    name: "Project 2",
    title: "Responsive Website",
  },
  {
    id: 20,
    img: project1,
    name: "Project 1",
    title: "Responsive Website",
  },
];
