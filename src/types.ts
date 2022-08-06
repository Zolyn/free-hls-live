export interface Option {
  uploader?: string
  dirs?: string[]
  output?: string
  storageProvider?: string
}
export type OptionResolved = Required<Option>
export interface OptionCli extends Option {
  config: string
}

export type Uploader = (
  path: string,
  options: Required<Option>
) => Promise<string> | string

export type StorageProvider = (opts: {
  filePath: string
  filename: string
  option: OptionResolved & Record<string, any>
}) => string | Promise<string>
