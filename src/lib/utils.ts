import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<T extends (...args: never[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Sử dụng format cố định để tránh hydration mismatch
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC", // Đảm bảo consistency giữa server và client
  };

  return date.toLocaleDateString("vi-VN", options);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
