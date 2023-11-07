// @ts-nocheck

// Today formated dd/mm/yyyy
const d = new Date().toLocaleDateString("es-AR");

// Number of times clicked
const count = 1;

// List of users
const userList = [
  {
    nombre: "Sarah Johnson",
    edad: 30,
    email: "sarah.johnson@example.com",
  },
  {
    nombre: "Juan Martinez",
    edad: 45,
    email: "juan.martinez@example.com",
  },
  {
    nombre: "Emily Wong",
    edad: 25,
    email: "emily.wong@example.com",
  },
];

// List of users emails
const emails = userList.map((u) => u.email);

// User modal is open
const open = true;
