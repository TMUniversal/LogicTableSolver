export function generateInputTable (size: number): boolean[][] {
  if (size < 1) throw new Error('Tables must be at least one column.')
  const columns: boolean[][] = []

  const columnLength = Math.pow(2, size)

  for (let column = 0; column < size; column++) {
    columns[column] = []
    // Push true/false in intervals of 2^i

    const intervals = Math.pow(2, column)

    const iterations = columnLength / intervals

    for (let iteration = 0; iteration < iterations; iteration++) {
      for (let interval = 0; interval < intervals; interval++) {
        columns[column].push(iteration % 2 !== 0)
      }
    }
  }

  const rows: boolean[][] = []

  let index = 0
  for (const column of columns) {
    rows[index] = []
    for (const value of column) {
      rows[index].push(value)
    }
    index++
  }

  return rows
}
