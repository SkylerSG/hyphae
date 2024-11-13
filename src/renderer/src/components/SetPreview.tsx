import { formatDateFromMs } from '@renderer/utils'
import { ComponentProps } from 'react'
/* eslint-disable react/prop-types */ // TODO: fix this.

export type SetPreviewProps = ComponentProps<'div'> & {
  title: string
  numberOfCards: number
  lastVisited?: number
}

export const SetPreview: React.FC<SetPreviewProps> = ({
  title = 'Example Set Title',
  numberOfCards = '0 Cards',
  lastVisited = formatDateFromMs(new Date().getTime()),
  ...props
}) => {
  return (
    <div className="bg-gray-800 rounded-lg w-56 h-20 m-2" {...props}>
      <div className="pl-2 pt-1 w-full h-full">
        <h1>{title}</h1>
        <h1>{numberOfCards}</h1>
        <h1>{lastVisited}</h1>
      </div>
    </div>
  )
}
