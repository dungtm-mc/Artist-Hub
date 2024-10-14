export const highestStat = (arr: number[]) => {
  const maxNumber = Math.max(...arr)

  const roundUp = (num: number): number => {
    const magnitude = Math.pow(10, Math.floor(Math.log10(num)))
    const rounded = Math.ceil(num / magnitude) * magnitude

    return rounded === num ? rounded + magnitude : rounded
  }

  return roundUp(maxNumber)
}
