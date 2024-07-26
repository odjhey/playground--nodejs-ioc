// @todo improve E
export type OperationResult<D, E> =
  | { ok: false; errorKind: E }
  | { ok: true; data: D }
