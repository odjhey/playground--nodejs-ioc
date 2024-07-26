import * as awilix from 'awilix'
import { InMemoryDatabaseImpl } from './components/in-memory-database-impl'
import { Database } from './components/database.interface'

type Container = {
  database: Database
  users: { id: string; name: string }[]
}

export const shared = awilix.createContainer<Container>({
  injectionMode: awilix.InjectionMode.PROXY,
  strict: true,
})

function typedCreate<T>(fn: (container: Container) => T) {
  return awilix.asFunction(fn)
}

shared.register({
  users: awilix.asValue([{ id: '1', name: 'John' }]),
  database: typedCreate(({ users }) => {
    return new InMemoryDatabaseImpl({ users })
  }),
})

/* NOTES
 * 1. registration completeness is not guaranteed, maybe this should be a @todo
 */
