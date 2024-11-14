import { SetPreviewBox } from '../SetPreviewBox'
import { Sidebar } from '../Sidebar'

export const MainScreen = () => {
  return (
    <div className="bg-slate-700 h-screen overflow-y-scroll relative">
      <SetPreviewBox numberOfPreviews={15} />
      <div className="fixed top-0 right-0 h-full">
        <Sidebar />
      </div>
    </div>
  )
}
