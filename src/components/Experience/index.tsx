import React from 'react';
import styles from './styles.module.css';

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly start: Date;
  readonly end?: Date;
  readonly location?: string;
  readonly description: string;
  readonly skills?: string[];
}

export interface ExperienceProps {
  readonly items: ExperienceItem[];
}

function initials(company: string): string {
  const words = company.split(/\s+/).filter(Boolean);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  }
  if (remainingMonths > 0 || years === 0) {
    parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`);
  }
  return parts.join(' ');
}

function formatPeriod(start: Date, end?: Date): string {
  const endDate = end ?? new Date();

  const totalMonths =
    (endDate.getFullYear() - start.getFullYear()) * 12 +
    (endDate.getMonth() - start.getMonth()) +
    1;

  return `${formatMonthYear(start)} – ${
    end ? formatMonthYear(endDate) : 'Present'
  } · ${formatDuration(totalMonths)}`;
}

export default function Experience({
  items,
}: ExperienceProps): React.ReactElement {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={`${item.company}-${item.role}`} className={styles.item}>
          <div className={styles.badge} aria-hidden="true">
            {initials(item.company)}
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.company}>{item.company}</span>
            </div>
            <div className={styles.meta}>
              <span className={styles.period}>
                {formatPeriod(item.start, item.end)}
              </span>
              {item.location && (
                <>
                  <span className={styles.metaSeparator}>·</span>
                  <span className={styles.location}>{item.location}</span>
                </>
              )}
            </div>
            {item.description && (
              <p className={styles.description}>{item.description}</p>
            )}
            {item.skills && item.skills.length > 0 && (
              <ul className={styles.skills}>
                {item.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
