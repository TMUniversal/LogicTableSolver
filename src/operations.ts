export function eq (a: boolean, b: boolean): boolean {
  return a === b
}

export function and (a: boolean, b: boolean): boolean {
  return a && b
}

export function or (a: boolean, b: boolean): boolean {
  return a || b
}

export function not (a: boolean): boolean {
  return !a
}

export function xor (a: boolean, b: boolean): boolean {
  return not(a === b)
}

export function impl (a: boolean, b: boolean): boolean {
  return a ? b : true
}
