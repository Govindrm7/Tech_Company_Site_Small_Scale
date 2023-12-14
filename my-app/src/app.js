import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Layout from './components/layout/layout';
import Home from './components/home/home';
import AboutUs from './components/aboutus/aboutus';
import Jobs from './components/jobs/jobs';
import Contact from './components/contact/contact';
import LoginPage from './login/login';

function App() {
    return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
    );
}
// function handleSubmit(e) {
//   e.preventDefault();

// axios.get('http://localhost:3003/user/login',formData)
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.error === "USER NOT EXIST") {
//       alert("User does not exist");
//       return;
//     } else if (data.error === "PASSWORD NOT MATCH") {
//       alert("Password is incorrect");
//       return;
//     }

//     saveUserSession(data.user);
//     navigate("/");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// }

export default App;