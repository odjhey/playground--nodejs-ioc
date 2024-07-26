import { asFunction, asValue, createContainer, InjectionMode } from 'awilix'
import { Database } from '../components/interfaces/database.interface'

export type Container = {
  database: Database
  users: { id: string; name: string }[]
}

export function typedCreate<T>(fn: (container: Container) => T) {
  return asFunction(fn)
}

export function typedValue<T>(value: T) {
  return asValue(value)
}

export const shared = createContainer<Container>({
  injectionMode: InjectionMode.PROXY,
  strict: true,
})
