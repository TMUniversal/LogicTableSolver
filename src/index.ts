import { generateInputTable } from './generator'
import { and, eq, not } from './operations'

type claim = (...args: boolean[]) => boolean

function evaluate (size: number, claims: claim[]): boolean[][] {
  const inputTable = generateInputTable(size)

  const output: boolean[][] = []

  for (const row of inputTable) {
    for (const claim of claims) {
      row.push(claim(...row))
    }
  }

  return output
}

function main (): void {
  const size = 3
  const claims: claim[] = [
    (a, b) => eq(a, not(b)),
    (_, b, c) => eq(b, not(c)),
    (a, b, c) => eq(c, and(not(a), not(b)))
  ]

  // eslint-disable-next-line no-console
  console.table(evaluate(size, claims))
}

main()
