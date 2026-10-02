import React, {useEffect, useRef, useState} from 'react';
import type {Capability} from '@site/src/components/Expertise';
import styles from './styles.module.css';

export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly start: Date;
  readonly end?: Date;
  readonly location?: string;
  readonly domain?: string;
  readonly description: string;
  readonly capabilities: Capability[];
}

export interface ExperiencesProps {
  readonly experiences: Experience[];
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

export function formatPeriod(start: Date, end?: Date): string {
  const endDate = end ?? new Date();

  const totalMonths =
    (endDate.getFullYear() - start.getFullYear()) * 12 +
    (endDate.getMonth() - start.getMonth()) +
    1;

  return `${formatMonthYear(start)} – ${
    end ? formatMonthYear(endDate) : 'Present'
  } · ${formatDuration(totalMonths)}`;
}

function itemKey(item: Experience): string {
  return `${item.company}-${item.role}-${item.start.getTime()}`;
}

function Meta({item}: {item: Experience}): React.ReactElement {
  return (
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
  );
}

function Card({
  item,
  onOpen,
}: {
  item: Experience;
  onOpen: (item: Experience, trigger: HTMLButtonElement) => void;
}): React.ReactElement {
  return (
    <button
      type="button"
      className={styles.card}
      aria-haspopup="dialog"
      aria-label={`${item.role} at ${item.company} — view details`}
      onClick={(event) => onOpen(item, event.currentTarget)}>
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.role}>{item.role}</span>
          <span className={styles.company}>{item.company}</span>
        </div>
        <Meta item={item} />
        <p className={styles.cardDescription}>{item.description}</p>
        <span className={styles.readMore}>
          Read more
          <span className={styles.readMoreArrow} aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </button>
  );
}

const SCROLL_STEP_RATIO = 0.9;

function Timeline({
  items,
  onOpen,
}: {
  items: Experience[];
  onOpen: (item: Experience, trigger: HTMLButtonElement) => void;
}): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const sortedItems = [...items].sort(
    (a, b) => b.start.getTime() - a.start.getTime(),
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) {
      return;
    }

    function updateScrollState(): void {
      if (!el) {
        return;
      }
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, {passive: true});
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  function scrollByStep(direction: 1 | -1): void {
    const el = scrollRef.current;
    if (!el) {
      return;
    }
    el.scrollBy({
      left: direction * el.clientWidth * SCROLL_STEP_RATIO,
      behavior: 'smooth',
    });
  }

  return (
    <div className={styles.timelineRow}>
      <button
        type="button"
        className={styles.timelineArrow}
        onClick={() => scrollByStep(-1)}
        disabled={!canScrollLeft}
        aria-label="Scroll to earlier roles">
        ‹
      </button>
      <div
        className={styles.timelineScroll}
        ref={scrollRef}
        tabIndex={0}
        aria-label="Experience timeline">
        <div className={styles.timelineTrack}>
          {sortedItems.map((item) => (
            <div key={itemKey(item)} className={styles.timelineItem}>
              <span className={styles.timelineDot} aria-hidden="true" />
              <Card item={item} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.timelineArrow}
        onClick={() => scrollByStep(1)}
        disabled={!canScrollRight}
        aria-label="Scroll to later roles">
        ›
      </button>
    </div>
  );
}

export default function Experiences({
  experiences,
}: ExperiencesProps): React.ReactElement {
  const [activeItem, setActiveItem] = useState<Experience | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  function openItem(item: Experience, trigger: HTMLButtonElement): void {
    lastTriggerRef.current = trigger;
    setActiveItem(item);
  }

  useEffect(() => {
    if (activeItem === null) {
      return;
    }

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setActiveItem(null);
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeItem]);

  return (
    <>
      <Timeline items={experiences} onOpen={openItem} />

      {activeItem && (
        <div
          className={styles.overlay}
          role="presentation"
          onClick={() => setActiveItem(null)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-modal-title"
            onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.closeButton}
              onClick={() => setActiveItem(null)}
              aria-label="Close">
              ×
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.badge} aria-hidden="true">
                {initials(activeItem.company)}
              </div>
              <div>
                <h3 id="experience-modal-title" className={styles.role}>
                  {activeItem.role}
                </h3>
                <span className={styles.company}>{activeItem.company}</span>
              </div>
            </div>
            <Meta item={activeItem} />
            <p className={styles.description}>{activeItem.description}</p>
            {activeItem.capabilities.length > 0 && (
              <ul className={styles.capabilities}>
                {activeItem.capabilities.map((capability) => (
                  <li key={capability} className={styles.capability}>
                    {capability}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
