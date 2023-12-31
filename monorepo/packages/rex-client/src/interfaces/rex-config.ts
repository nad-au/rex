import { DefaultLoggerOptions } from '@dbc-tech/http-kit'
import { Logger } from 'winston'

export interface RexConfig {
  baseUrl: string
  email: string
  password: string
  accountId?: number | null
  logger?: Logger
  defaultLoggerOptions?: DefaultLoggerOptions
  countLimit?: number
  customHeaders?: Record<string, string | string[] | undefined>
  backoff?: number
}
