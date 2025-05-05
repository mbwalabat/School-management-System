<!-- School Management System -->


This project is a multi-role login system with different access levels for Admin, Teacher, and Student. Each role has its own login page, and once logged in, users will be directed to their respective dashboards with appropriate functionalities.

<!-- Features -->

Admin Login Page: Admins can manage users, view reports, and perform administrative tasks.
Teacher Login Page: Teachers can access their courses, student data, and manage assignments or grades.
Student Login Page: Students can access their courses,attendance and grades
Prerequisites
Before running the project, ensure you have the following installed on your machine:

Node.js (or your preferred server-side technology)
A database (e.g.,MongoDB) for storing user credentials and data
A code editor like Visual Studio Code

<!-- Installation -->

Install dependencies:

npm install

<!-- Passwords -->

ADMIN_USERNAME=fahadj698@gmail.com
ADMIN_PASSWORD=fahadali4474
TEACHER_USERNAME=dryaseen@gmail.com
TEACHER_PASSWORD=YASEEN
STUDENT_ROLL_NUMBER=2022
STUDENT_USERNAME=Fahad Ali
STUDENT_PASSWORD=FAHAD


<!-- Run the project: -->

Start the server with:

cd backend
npm start
cd frontend
npm start
The application should now be running on http://localhost:3000 (or the port defined in your configuration).

Usage
<!-- Admin Login: -->

Navigate to the /admin page.
Enter the admin credentials (username and password).
After logging in, you'll be redirected to the admin dashboard with functionalities for managing users, viewing reports, etc.
<!-- Teacher Login: -->

Navigate to the /teacher page.
Enter the teacher credentials.
Once logged in, the teacher can access their dashboard, manage courses, assignments, and view student data.
<!-- Student Login: -->

Navigate to the /student page.
Enter the student credentials.
After logging in, students will be directed to their dashboard with access to their courses, grades, and assignments.
