import type {Experience} from '@site/src/components/Experiences';
import {CareerStats} from '@site/src/components/Stats/index';

export function computeCareerStats(items: Experience[]): CareerStats {
  const earliest = computeEarliestExperience(items);
  const latest = computeLatestExperience(items);

  return {
    years: computeCareerYears(earliest.start),
    domains: computeDomains(items),
    earliestRole: earliest.role,
    latestRole: latest.role,
  };
}

function computeEarliestExperience(items: Experience[]): Experience {
  return items.reduce(
    (min, item) => (item.start.getTime() < min.start.getTime() ? item : min),
    items[0],
  );
}

function computeLatestExperience(items: Experience[]): Experience {
  return items.reduce(
    (max, item) => (item.start.getTime() > max.start.getTime() ? item : max),
    items[0],
  );
}

function computeCareerYears(start: Date): number {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();

  if (isBeforeAnniversary(now, start)) {
    years -= 1;
  }

  return years;
}

function computeDomains(items: Experience[]): number {
  return new Set(
    items
      .map((item) => item.domain)
      .filter((domain): domain is string => Boolean(domain)),
  ).size;
}

function isBeforeAnniversary(now: Date, start: Date): boolean {
  return (
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())
  );
}
