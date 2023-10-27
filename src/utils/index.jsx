export const titleCase = (str) => {
  return str.replace(/_/g, ' ').replace(/\b\w/g, (match) => match.toUpperCase())
}
