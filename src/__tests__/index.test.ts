import { start } from '../index'

// TODO remove on implementation
describe('index.ts', () => {
  it('returns `Hello World!`', () => {
    const result = start()

    expect(result).toStrictEqual('Hello World!')
  })
})
