import { SetPreview } from './SetPreview'
/* eslint-disable react/prop-types */ // TODO: fix this.

export const SetPreviewBox = ({ numberOfPreviews, ...props }) => {
  return (
    <div>
      <div className="flex flex-row w-[95vw] bg-black/50 h-7 rounded-b-md ">
        <h1>Sorting placeholder</h1>
      </div>
      <div className="flex flex-wrap h-full mt-2">
        {Array.from({ length: numberOfPreviews }).map((_, index) => (
          <SetPreview
            key={index}
            setId={index + 1} // Temporary
            title={`Sample Title ${index + 1}`}
            numberOfCards={10}
          />
        ))}
      </div>
    </div>
  ) //TODO: Wrap separates items too much
}
