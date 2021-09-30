export function generateInputTable (size: number): boolean[][] {
  if (size < 1) throw new Error('Tables must be at least one column.')
  const columns: boolean[][] = []

  const rowCount = Math.pow(2, size)

  for (let column = 0; column < size; column++) {
    columns[column] = []
    // Push true/false in intervals of 2^i

    const intervals = Math.pow(2, column)

    const iterations = rowCount / intervals

    for (let iteration = 0; iteration < iterations; iteration++) {
      for (let interval = 0; interval < intervals; interval++) {
        columns[column].push(iteration % 2 !== 0)
      }
    }
  }

  // Reverse order of the columns
  // C, B, A => A, B, C
  columns.reverse()

  // Convert column array to row array
  /*

    Column format:
    [ 00001111, 00110011, 01010101 ]

    Row format: [
      [ 0, 0, 0 ],
      [ 0, 0, 1 ],
      [ 0, 1, 0 ],
      [ 0, 1, 1 ],
      [ 1, 0, 0 ],
      [ 1, 0, 1 ],
      [ 1, 1, 0 ],
      [ 1, 1, 1 ],
    ]

  */

  const rows: boolean[][] = []

  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    rows[rowIndex] = []
    for (let column = 0; column < columns.length; column++) {
      rows[rowIndex].push(columns[column][rowIndex])
    }
  }

  return rows
}
