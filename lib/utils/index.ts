import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Date formatting utilities
export function formatDate(
  date: string | Date,
  locale: string = "vi-VN",
  options?: Intl.DateTimeFormatOptions
): string {
  let d: Date;
  if (typeof date === "string") {
    const m = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (m) {
      const [, y, mo, da] = m;
      d = new Date(Number(y), Number(mo) - 1, Number(da)); // local-safe
    } else {
      d = new Date(date);
    }
  } else {
    d = new Date(date);
  }
  return d.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // Optionally force VN time: timeZone: "Asia/Ho_Chi_Minh",
    ...options,
  } as Intl.DateTimeFormatOptions);
}

export function formatTime(time: string): string {
  return time;
}

export function formatDateTime(date: string, time: string): string {
  const d = new Date(`${date}T${time}`);
  return d.toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Calendar utilities
export function generateICalEvent(event: {
  title: string;
  start: string | Date;
  end: string | Date;
  location?: string;
  description?: string;
  timezone?: string; // e.g., "Asia/Ho_Chi_Minh"
}): string {
  const asDate = (d: string | Date) => (d instanceof Date ? d : new Date(d));
  const fmtUTC = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const fmtLocal = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    return (
      d.getFullYear().toString() +
      pad(d.getMonth() + 1) +
      pad(d.getDate()) +
      "T" +
      pad(d.getHours()) +
      pad(d.getMinutes()) +
      pad(d.getSeconds())
    );
  };
  const useTZID = !!event.timezone;
  const dtstart = useTZID
    ? fmtLocal(asDate(event.start))
    : fmtUTC(asDate(event.start));
  const dtend = useTZID
    ? fmtLocal(asDate(event.end))
    : fmtUTC(asDate(event.end));

  const escapeICalText = (text: string) => {
    return text.replace(/([\\,;])/g, "\\$1").replace(/\n/g, "\\n");
  };

  const uid = `${Date.now()}@thaivan-wedding.com`;
  const dtstamp = fmtUTC(new Date());

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Thái & Vân Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    useTZID
      ? `DTSTART;TZID=${event.timezone}:${dtstart}`
      : `DTSTART:${dtstart}`,
    useTZID ? `DTEND;TZID=${event.timezone}:${dtend}` : `DTEND:${dtend}`,
    `SUMMARY:${escapeICalText(event.title)}`,
    event.location ? `LOCATION:${escapeICalText(event.location)}` : "",
    event.description ? `DESCRIPTION:${escapeICalText(event.description)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\n");
}

export function downloadICalFile(icalContent: string, filename: string) {
  const blob = new Blob([icalContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Form validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

// Text utilities
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
