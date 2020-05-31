import { parse } from './index'

describe('parse', () => {
  it('parses correctly without any error', () => {
    ;[
      ``,
      ` `,
      `a `,
      `a >`,
      `a > b`,
      `a > b, `,
      `a > b, c`,
      `a > b, c
d > `,
      `a > b, c
d > e`,
      `


      something-between-random-empty-lines

d > e

`,
      `billing-engine > order-placed
order-tracking-service > order-placed, order-updates
customer-worker > customer-registered
`,
    ].forEach((input) => {
      const output = parse(input)
      expect({ input, output }).toMatchSnapshot()
    })
  })
})
