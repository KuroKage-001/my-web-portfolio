import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ChatBot from './components/chatbot/ChatBot'
import ChatBotButton from './components/chatbot/ChatBotButton'

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      
      {/* Chatbot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      {!isChatOpen && <ChatBotButton onClick={() => setIsChatOpen(true)} />}
    </>
  )
}

export default App
