import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { FlashCardLearnScreen } from './components/FlashCardLearnScreen'
import { MainScreen } from './components/MainScreen'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/flashcard" element={<FlashCardLearnScreen />} />
      </Routes>
    </Router>
  )
}

export default App
{
  /* <div className="bg-slate-700 h-screen overflow-y-scroll relative">
      <SetPreviewBox numberOfPreviews={15} />
      <div className="fixed top-0 right-0 h-full">
        <Sidebar />
      </div>
    </div> */
}
