export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number,
  onStart?: () => void
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>): void => {
    onStart?.()
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), waitFor)
  }
}
