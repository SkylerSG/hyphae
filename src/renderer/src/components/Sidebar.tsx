import { FaRegFolderOpen, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircleOutline, IoSettingsOutline, IoStatsChartOutline } from 'react-icons/io5'
import { TbAward } from 'react-icons/tb'
export const Sidebar = () => {
  return (
    // TODO: Border styles messy here
    <div className="bg-slate-900/25 flex flex-col w-10 h-full rounded-l-md">
      <div className="ml-auto mr-auto mt-3 mb-2 p-2 rounded-md hover:bg-slate-400/25">
        <IoSettingsOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2 p-2 hover:bg-slate-400/25">
        <IoStatsChartOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25">
        <TbAward />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25">
        <IoInformationCircleOutline />
      </div>
      <div className="ml-auto mr-auto mt-2 mb-2 p-2 rounded-md hover:bg-slate-400/25">
        <FaRegFolderOpen />
      </div>
      <div className="ml-auto mr-auto mt-auto mb-2 pr-2 p-2 rounded-md hover:bg-slate-400/25">
        <FaUserCircle />
      </div>
    </div>
  )
}
