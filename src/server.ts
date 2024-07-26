import { Database } from './components/database.interface'
import { CONFIG } from './config'
import { shared } from './shared'
console.log(`hello ${CONFIG.projectName}`)

const getUser = async (deps = defaultDeps()) => {
  const user = await deps.db.getUser('1')
  return user
}

type Deps = {
  db: Pick<Database, 'getUser'>
}

const defaultDeps = (): Deps => ({
  db: shared.resolve('database'),
})

const main = async () => {
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
    },
  })
  console.log(user)
}

const root = async () => {
  await main()
  await test()
}

root()
