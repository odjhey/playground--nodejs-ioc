import { OperationResult } from '../utils/utils'
import { Database } from './database.interface'

export class InMemoryDatabaseImpl implements Database {
  private users: { id: string; name: string }[]

  constructor({ users }: InMemoryDatabaseConstructorParams) {
    this.users = users
  }

  async getUser(
    id: string
  ): Promise<OperationResult<{ id: string; name: string }, 'notFound'>> {
    const user = this.users.find((user) => user.id === id)
    if (!user) {
      return { ok: false, errorKind: 'notFound' }
    }
    return { ok: true, data: user }
  }
}

export type InMemoryDatabaseConstructorParams = {
  users: { id: string; name: string }[]
}
