import type {ExperienceItem} from '@site/src/components/Experience';

export interface CareerStats {
  readonly years: number;
  readonly roles: number;
  readonly domains: number;
  readonly earliestRole: string;
  readonly latestRole: string;
}

export function computeCareerStats(items: ExperienceItem[]): CareerStats {
  const earliest = items.reduce(
    (min, item) => (item.start.getTime() < min.start.getTime() ? item : min),
    items[0],
  );
  const latest = items.reduce(
    (max, item) => (item.start.getTime() > max.start.getTime() ? item : max),
    items[0],
  );

  const now = new Date();
  let years = now.getFullYear() - earliest.start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < earliest.start.getMonth() ||
    (now.getMonth() === earliest.start.getMonth() &&
      now.getDate() < earliest.start.getDate());
  if (beforeAnniversary) {
    years -= 1;
  }

  return {
    years,
    roles: items.length,
    domains: new Set(
      items
        .map((item) => item.domain)
        .filter((domain): domain is string => Boolean(domain)),
    ).size,
    earliestRole: earliest.role,
    latestRole: latest.role,
  };
}
