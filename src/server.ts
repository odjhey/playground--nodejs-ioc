import { Database } from './components/interfaces/database.interface'
import { CONFIG } from './config'
import { shared } from './shared'
console.log(`hello ${CONFIG.projectName}`)

const getUser = async (deps = defaultDeps()) => {
  const user = await deps.db.getUser('1')
  return user
}
const createUser = async (deps = defaultDeps()) => {
  const user = await deps.db.createUser({
    id: '1',
    name: 'Batman',
  })
  return user
}

type Deps = {
  db: Pick<Database, 'getUser' | 'createUser'>
}

const defaultDeps = (): Deps => ({
  db: shared.resolve('database'),
})

const main = async () => {
  await createUser()
  const user = await getUser()

  console.log('---- main ----')
  console.log(user)
}

const test = async () => {
  console.log('---- test ----')
  const user = await getUser({
    db: {
      getUser: async () => {
        return { ok: true, data: { id: '0000', name: 'Joker' } }
      },
      createUser: async () => {
        return { ok: false, errorKind: 'failed' } as const
      },
    },
  })
  console.log(user)
}

const root = async () => {
  await main()
  await test()
}

root()
