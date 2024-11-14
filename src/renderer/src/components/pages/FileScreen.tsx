import { useNavigate } from 'react-router-dom'

export const FileScreen = () => {
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    navigate(url)
  }
  return (
    <div className="bg-slate-700 h-screen overflow-y-scroll relative">
      <div
        className="w-20 h-20 bg-slate-800 hover:bg-slate-600"
        onClick={() => handleNavigate('/')}
      >
        <h1 className="text-xl">Home</h1>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl pr-10">Files</h1>
      </div>
    </div>
  )
}
