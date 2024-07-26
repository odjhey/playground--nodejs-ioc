import { OperationResult } from '../utils/utils'

export interface Database {
  getUser: (
    id: string
  ) => Promise<OperationResult<{ id: string; name: string }, 'notFound'>>
}
