import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function progressWidth(current: number, max: number): string {
  return `${(current / max) * 100}%`
}
