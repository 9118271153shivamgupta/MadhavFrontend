import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import College from './pages/College';
import Admission from './pages/Admission';
import Course from './pages/Course';
import ContactUs from './pages/ContactUs';
// 🚀 Naya dynamic component details inject kiya
import CourseDetailsPage from './pages/CourseDetailsPage'; 
import Footer from './components/Footer';

const App = () => {
  const [isDark, setIsDark] = useState(false); 

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-bg-main text-text-main transition-colors duration-300 flex flex-col">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/college" element={<College />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* 🚀 Dynamic parameter token validation trigger link added */}
            <Route path="/course-details/:courseId" element={<CourseDetailsPage />} />
          </Routes>

        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;