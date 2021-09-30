export function eq (a: boolean, b: boolean): boolean {
  return a === b
}

export function and (a: boolean, b: boolean): boolean {
  return a && b
}

export function or (a: boolean, b: boolean): boolean {
  return a || b
}

export function xor (a: boolean, b: boolean): boolean {
  return !(a === b)
}

export function impl (a: boolean, b: boolean): boolean {
  return a ? b : true
}
