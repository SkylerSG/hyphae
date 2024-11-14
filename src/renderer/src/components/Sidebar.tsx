import { FaRegFolderOpen, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircleOutline, IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5'
import { TbAward } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
export const Sidebar = () => {
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    navigate(url)
  }
  return (
    // TODO: Border styles messy here
    <div className="bg-slate-900/25 flex flex-col w-10 h-full rounded-l-md">
      <div
        className="ml-auto mr-auto mt-3 mb-2 p-2 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/settings')}
      >
        <IoSettingsOutline />
      </div>
      <div
        className="ml-auto mr-auto mt-2 mb-2 p-2 hover:bg-slate-400/25"
        onClick={() => handleNavigate('/stats')}
      >
        <IoStatsChartOutline />
      </div>
      <div
        className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/rankings')}
      >
        <TbAward />
      </div>
      <div
        className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/information')}
      >
        <IoInformationCircleOutline />
      </div>
      <div
        className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/files')}
      >
        <FaRegFolderOpen />
      </div>
      <div
        className="ml-auto mr-auto mt-auto mb-2 pr-2 p-2 rounded-md hover:bg-slate-400/25"
        onClick={() => handleNavigate('/profile')}
      >
        <FaUserCircle />
      </div>
    </div>
  )
}
