import { basename } from 'path'
import { defineUploader } from '../src/defines'
import cosProvider from '../storage/cos'

export default defineUploader(async (path, option) => {
  const filename = basename(path)

  const url = await cosProvider({
    filePath: path,
    filename,
    option,
  })

  return url
})
