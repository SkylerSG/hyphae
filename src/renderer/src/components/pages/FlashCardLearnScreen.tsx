import { IoInformationCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { RiHome5Line } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { FlashcardViewer } from '../FlashcardViewer'
export const FlashCardLearnScreen = () => {
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    navigate(url)
  }

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const setId = params.get('setId')

  return (
    <div className="h-full bg-slate-600">
      <div className="flex justify-between">
        <div
          className="p-2 w-8 h-8 rounded-md hover:bg-slate-400/25"
          onClick={() => handleNavigate('/')}
        >
          <RiHome5Line />
        </div>
        <div
          className="p-2 w-8 h-8 rounded-md hover:bg-slate-400/25"
          onClick={() => handleNavigate('/')}
        >
          <IoInformationCircleOutline />
        </div>
      </div>
      <FlashcardViewer />
      <div
        className="fixed bottom-0 right-0 p-2 w-8 h-8 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/')}
      >
        <IoSettingsOutline />
      </div>
    </div>
  )
}
