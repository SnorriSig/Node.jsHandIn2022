export function isEmpty(val) {
  return val.trim().length === 0;
}

export function isNumber(val) {
  val = parseInt(val)
  return Number.isNaN(val)
}