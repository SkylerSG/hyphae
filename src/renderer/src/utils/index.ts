import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
// TS Complainer, All Good
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
