import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
// TS Complainer, All Good
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Pacific/Auckland'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)
