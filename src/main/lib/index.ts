import { appDirectoryName, fileEncoding } from '@shared/constants'
import { FlashcardInfo } from '@shared/models'
import { GetFlashcards } from '@shared/types'
import { ensureDir, stat } from 'fs-extra'
import { readdir } from 'fs/promises'
import { isEmpty } from 'lodash'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getFlashcards: GetFlashcards = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir) // Ensure directory exists, if not, create

  const flashCardFileNames = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const flashcards = flashCardFileNames.filter((fileName) => fileName.endsWith('.json'))

  if (isEmpty(flashcards)) {
    console.info('No flashcards found.')
  }

  return Promise.all(flashcards.map(getFlashcardTitleFromFileName))
}

export const getFlashcardTitleFromFileName = async (filename: string): Promise<FlashcardInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.json$/, '')
  }
}
