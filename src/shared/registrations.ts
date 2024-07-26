import { InMemoryDatabaseImpl } from '../components/in-memory-database-impl'
import { shared, typedCreate } from './container-definition'

shared.register({
  database: typedCreate(() => new InMemoryDatabaseImpl()).singleton(),
})

/* NOTES
 * 1. registration completeness is not guaranteed, maybe this should be a @todo
 */
