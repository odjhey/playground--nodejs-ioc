import { OperationResult } from '../utils/utils'
import { CreateUserParams, Database } from './interfaces/database.interface'

export class InMemoryDatabaseImpl implements Database {
  private users: { id: string; name: string }[]

  constructor() {
    this.users = []
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

  async createUser(
    attribs: CreateUserParams
  ): Promise<OperationResult<{ id: string; name: string }, 'failed'>> {
    const user = this.users.find((user) => user.id === attribs.id)
    if (user) {
      return { ok: false, errorKind: 'failed' }
    }
    this.users.push(attribs)
    return { ok: true, data: attribs }
  }
}

export type InMemoryDatabaseConstructorParams = {}
