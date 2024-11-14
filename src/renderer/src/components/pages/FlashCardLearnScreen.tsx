import { useLocation, useNavigate } from 'react-router-dom'

export const FlashCardLearnScreen = () => {
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    navigate(url)
  }

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const setId = params.get('setId')

  return (
    <div className="flex flex-col text-center justify-center bg-slate-600">
      <h1 className="text-4xl">Flashcard ID/Clicked ID: {setId}</h1>
      <div
        className="w-20 h-20 bg-slate-800 hover:bg-slate-600"
        onClick={() => handleNavigate('/')}
      >
        <h1 className="text-xl">Home</h1>
      </div>
    </div>
  )
}
