export function useDebounce<
  T extends (...args: unknown[]) => unknown
>(
  fn: T,
  delay = 300
) {
  let timer: number | undefined

  return function (...args: Parameters<T>): void {
    if (timer !== undefined) {
      clearTimeout(timer)
    }

    timer = window.setTimeout(() => {
      fn(...args)
      timer = undefined
    }, delay)
  }
}