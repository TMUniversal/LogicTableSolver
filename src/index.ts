/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { generateInputTable } from './generator'
import { and, eq, not } from './operations'

type claim = (...args: boolean[]) => boolean

export function evaluate (size: number, claims: claim[]): [truthValues: boolean[][], evaluated: boolean[][]] {
  const inputTable = generateInputTable(size)

  const output: boolean[][] = []

  let index = 0
  for (const row of inputTable) {
    output[index] = []

    for (const claim of claims) {
      output[index].push(claim(...row))
    }

    index++
  }

  return [inputTable, output]
}

/*
  Example Case

  A claims B is lying
  B claims C is lying
  C claims A and B are lying

  Solution:

  A and C are lying, B is telling the truth
*/

export function main (): void {
  const size = 3
  const claims: claim[] = [
    (a, b) => eq(a, not(b)),
    (_, b, c) => eq(b, not(c)),
    (a, b, c) => eq(c, and(not(a), not(b)))
  ]

  const [truthValues, result] = evaluate(size, claims)

  console.log('Input Values')
  console.table(truthValues)

  console.log('Results')
  console.table(result)

  console.log('Truth Condition(s):')

  // Find combination of inputs that result in all outputs being true
  result.filter(value => value.every(v => v)).length > 1 && console.log('There are more than one possible answers')

  console.log(truthValues[result.findIndex(value => value.every(v => v))], 'results in all true')
}

main()
