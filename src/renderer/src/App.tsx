import { SetPreviewBox } from './components/SetPreviewBox'
import { Sidebar } from './components/Sidebar'

const App: React.FC = () => {
  return (
    <div className="bg-slate-700 h-screen overflow-y-scroll relative">
      <SetPreviewBox numberOfPreviews={15} />
      <div className="fixed top-0 right-0 h-full">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
