import { FaRegFolderOpen, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircleOutline, IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5'
import { TbAward } from 'react-icons/tb'
export const Sidebar = () => {
  return (
    <div className="bg-slate-900/25 flex flex-col w-10 h-full rounded-l-md">
      <div className="ml-auto mr-auto mt-3 mb-2">
        <IoSettingsOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2">
        <IoStatsChartOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2">
        <TbAward />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2">
        <IoInformationCircleOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2">
        <FaRegFolderOpen />
      </div>
      <div className="ml-auto mr-auto mt-auto mb-4">
        <FaUserCircle />
      </div>
    </div>
  )
}
