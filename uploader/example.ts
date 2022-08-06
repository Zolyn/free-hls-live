/* eslint-disable no-console */
import { readFile } from 'fs/promises'
import { defineUploader } from '../src/defines'

export default defineUploader(async (path) => {
  const content = await readFile(path)
  console.log(content.length)
  return ''
})
