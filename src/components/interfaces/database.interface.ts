import { OperationResult } from '../../utils/utils'

type User = { id: string; name: string }

export interface Database {
  getUser: (id: string) => Promise<OperationResult<User, 'notFound'>>
  createUser: (id: CreateUserParams) => Promise<OperationResult<User, 'failed'>>
}

export type CreateUserParams = Pick<User, 'id' | 'name'>
