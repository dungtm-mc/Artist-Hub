export const formatNumber = (value: number) => {
  const removeTrailingZero = (num: string) => num.replace(/\.0$/, '')

  if (value >= 1_000_000_000) {
    return removeTrailingZero((value / 1_000_000_000).toFixed(1)) + 'B'
  } else if (value >= 1_000_000) {
    return removeTrailingZero((value / 1_000_000).toFixed(1)) + 'M'
  } else if (value >= 1_000) {
    return removeTrailingZero((value / 1_000).toFixed(1)) + 'K'
  } else {
    return value.toString()
  }
}
