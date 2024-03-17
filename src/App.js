import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import QuizPage from "./pages/Quiz";
import ContactPage from "./pages/Contact";
import ProfilePage from "./pages/Profile";
// import QuestionsPage from "./pages/Questions";
import QuestionsPageList from "./pages/QuestionsList";
import NewQuestionPage from "./pages/NewQuestion";
import QuestionsDetails from "./pages/QuestionsDetails";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="questions" element={<QuestionsPage />} /> */}
          <Route path="questions" element={<QuestionsPageList />} />
          <Route path="questions/:id" element={<QuestionsDetails />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="profile/new-question" element={<NewQuestionPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
