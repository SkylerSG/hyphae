import { FlashcardInfo } from './models'

export type GetFlashcards = () => Promise<FlashcardInfo[]>
