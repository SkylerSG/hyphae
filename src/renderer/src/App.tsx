import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { FileScreen } from './components/pages/FileScreen'
import { FlashCardLearnScreen } from './components/pages/FlashCardLearnScreen'
import { InformationScreen } from './components/pages/InformationScreen'
import { MainScreen } from './components/pages/MainScreen'
import { ProfileScreen } from './components/pages/ProfileScreen'
import { RankingsScreen } from './components/pages/RankingsScreen'
import { SettingsScreen } from './components/pages/SettingsScreen'
import { StatsScreen } from './components/pages/StatsScreen'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/flashcard" element={<FlashCardLearnScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/stats" element={<StatsScreen />} />
        <Route path="/rankings" element={<RankingsScreen />} />
        <Route path="/information" element={<InformationScreen />} />
        <Route path="/files" element={<FileScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
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
