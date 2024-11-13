import { formatDateFromMs } from '@renderer/utils'
import { ComponentProps } from 'react'
import { useNavigate } from 'react-router-dom'
/* eslint-disable react/prop-types */ // TODO: fix this.

export type SetPreviewProps = ComponentProps<'div'> & {
  title: string
  numberOfCards: number
  lastVisited?: number
}

export const SetPreview: React.FC<SetPreviewProps> = ({
  title = 'No Set Title',
  numberOfCards = 'N/A',
  lastVisited = formatDateFromMs(new Date().getTime()),
  ...props
}) => {
  const navigate = useNavigate()

  const handleNavigate = (url: string) => {
    navigate(url)
  }
  return (
    <div
      className="bg-gray-800 rounded-lg w-56 h-20 m-2 hover:bg-gray-700"
      {...props}
      onClick={() => handleNavigate('/flashcard')}
    >
      <div className="pl-2 pt-1 w-full h-full">
        <h1>{title}</h1>
        <h1>{numberOfCards + ' Cards'}</h1>
        <h1>{lastVisited}</h1>
      </div>
    </div>
  )
}
