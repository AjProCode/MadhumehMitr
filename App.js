
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <img src="/logo.png" alt="Madhumeh Mitr Logo" style={{ height: '100px' }} />
    <h1>Madhumeh Mitr</h1>
    <p>Your AI-powered Diabetes Buddy</p>
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
      <Link to="/education">Diabetes Education for Children</Link>
      <Link to="/diet">Diet Plans for Adults</Link>
      <Link to="/tracking">Health Tracking</Link>
      <Link to="/quiz">Quiz</Link>
    </nav>
  </div>
);

const EducationPage = () => <div style={{ padding: '20px' }}>📘 Diabetes Education: Interactive stories and videos for children coming soon.</div>;
const DietPage = () => <div style={{ padding: '20px' }}>🥗 Diet Plans: Personalized meal suggestions will be available here.</div>;
const TrackingPage = () => <div style={{ padding: '20px' }}>📊 Health Tracking: Log your sugar levels and view trends.</div>;
const QuizPage = () => <div style={{ padding: '20px' }}>🧠 Quiz: Fun knowledge checks about diabetes.</div>;

export default function MadhumehMitrApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/diet" element={<DietPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
