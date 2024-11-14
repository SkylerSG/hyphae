import { SetPreview } from './SetPreview'
/* eslint-disable react/prop-types */ // TODO: fix this.

export const SetPreviewBox = ({ numberOfPreviews, ...props }) => {
  return (
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
  ) //TODO: Wrap separates items too much
}
