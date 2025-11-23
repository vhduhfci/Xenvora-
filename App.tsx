import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Privacy from './pages/Privacy';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<ProjectDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;