import React from 'react';
import {
  Document,
  Line,
  Link,
  Page,
  Path,
  Polyline,
  Rect,
  StyleSheet,
  Svg,
  Text,
  View,
} from '@react-pdf/renderer';
import {formatPeriod} from '@site/src/components/Experiences';
import {EXPERIENCES} from '@site/src/data/experiences';
import {PROFILE} from '@site/src/data/profile';
import {computeCareerStats} from './careerStats';
import {CAPABILITY_GROUPS} from '@site/src/data/capabilities';
import {
  EMAIL_ICON,
  GITHUB_ICON,
  LINKEDIN_ICON,
  type SocialIcon,
} from '@site/src/components/SocialLinks/icons';

const INK = '#1c2b22';
const GOLD = '#a3824f';
const CREAM = '#f8f6f0';
const DARK = '#16241a';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    color: INK,
  },
  name: {fontFamily: 'Times-Bold', fontSize: 22, marginBottom: 4},
  role: {fontSize: 12, color: GOLD, marginBottom: 12},
  contactRow: {flexDirection: 'row', marginBottom: 16},
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
    color: INK,
    textDecoration: 'none',
  },
  contactLabel: {fontSize: 9.5, marginLeft: 5, color: INK},
  divider: {
    borderBottomWidth: 0.75,
    borderBottomColor: GOLD,
    marginBottom: 18,
  },
  sectionTitle: {fontFamily: 'Times-Bold', fontSize: 14, marginBottom: 10},
  paragraph: {fontSize: 10.5, lineHeight: 1.5},
  quote: {
    fontFamily: 'Times-Italic',
    fontSize: 10.5,
    lineHeight: 1.4,
    marginBottom: 6,
  },
  quoteAuthor: {fontFamily: 'Times-Italic', fontSize: 9.5, color: GOLD},
  introBlock: {marginBottom: 20},
  statsRow: {flexDirection: 'row', marginBottom: 24},
  statCard: {flex: 1, borderRadius: 6, padding: 10, marginRight: 10},
  statCardLast: {marginRight: 0},
  statValue: {fontFamily: 'Times-Bold', fontSize: 17},
  statLabel: {fontSize: 8.5, marginTop: 2},
  experienceItem: {marginBottom: 16},
  roleCompany: {fontFamily: 'Times-Bold', fontSize: 11.5},
  meta: {fontSize: 9.5, color: GOLD, marginTop: 3},
  domain: {
    fontFamily: 'Times-BoldItalic',
    fontSize: 8,
    color: GOLD,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  description: {fontSize: 10, lineHeight: 1.45, marginTop: 5},
  capabilities: {fontFamily: 'Times-Italic', fontSize: 9, marginTop: 5},
  capabilitiesPanel: {
    backgroundColor: DARK,
    borderRadius: 10,
    padding: 20,
    marginTop: 8,
  },
  capHeading: {fontFamily: 'Times-Bold', fontSize: 14, color: CREAM},
  capIntro: {
    fontSize: 9.5,
    color: CREAM,
    opacity: 0.8,
    marginTop: 4,
    marginBottom: 16,
    maxWidth: 360,
  },
  capRow: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(248, 246, 240, 0.2)',
  },
  capRowLast: {borderBottomWidth: 0, marginBottom: 0, paddingBottom: 0},
  capTitle: {fontFamily: 'Times-Bold', fontSize: 10.5, color: CREAM},
  capSkills: {fontSize: 9, color: CREAM, opacity: 0.85, marginTop: 3},
});

const ICON_PRIMITIVES: Record<string, React.ComponentType<any>> = {
  rect: Rect,
  path: Path,
  polyline: Polyline,
  line: Line,
};

function PdfIcon({
  icon,
  size = 11,
  color = INK,
}: {
  icon: SocialIcon;
  size?: number;
  color?: string;
}): React.ReactElement {
  const shapeProps = icon.stroke
    ? {stroke: color, strokeWidth: 1.6, fill: 'none'}
    : {fill: color};

  return (
    <Svg viewBox={icon.viewBox} width={size} height={size}>
      {icon.shapes.map((shape, index) => {
        const Primitive =
          ICON_PRIMITIVES[shape.tag as keyof typeof ICON_PRIMITIVES];
        return <Primitive key={index} {...shape.attrs} {...shapeProps} />;
      })}
    </Svg>
  );
}

function itemKey(item: (typeof EXPERIENCES)[number]): string {
  return `${item.company}-${item.role}-${item.start.getTime()}`;
}

export default function CvDocument(): React.ReactElement {
  const stats = computeCareerStats(EXPERIENCES);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.role}>{PROFILE.role}</Text>

        <View style={styles.contactRow}>
          <Link src={`mailto:${PROFILE.email}`} style={styles.contactItem}>
            <PdfIcon icon={EMAIL_ICON} />
            <Text style={styles.contactLabel}>{PROFILE.email}</Text>
          </Link>
          <Link src={PROFILE.linkedinUrl} style={styles.contactItem}>
            <PdfIcon icon={LINKEDIN_ICON} />
            <Text style={styles.contactLabel}>LinkedIn</Text>
          </Link>
          <Link src={PROFILE.githubUrl} style={styles.contactItem}>
            <PdfIcon icon={GITHUB_ICON} />
            <Text style={styles.contactLabel}>GitHub</Text>
          </Link>
        </View>

        <View style={styles.divider} />

        <View style={styles.introBlock}>
          <Text style={styles.quote}>
            “A designer knows he has achieved perfection not when there is
            nothing left to add, but when there is nothing left to take away.”
          </Text>
          <Text style={styles.quoteAuthor}>— Antoine de Saint-Exupéry</Text>
        </View>

        <Text style={styles.sectionTitle}>Introduction</Text>
        <View style={{marginBottom: 20}}>
          <Text style={styles.paragraph}>{PROFILE.introduction}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, {backgroundColor: DARK}]}>
            <Text style={[styles.statValue, {color: CREAM}]}>
              {stats.years}+
            </Text>
            <Text style={[styles.statLabel, {color: CREAM, opacity: 0.85}]}>
              Years
            </Text>
          </View>
          <View
            style={[
              styles.statCard,
              {
                borderWidth: 0.75,
                borderColor: 'rgba(163, 130, 79, 0.35)',
                borderLeftWidth: 3,
                borderLeftColor: GOLD,
              },
            ]}>
            <Text style={[styles.statLabel, {color: GOLD}]}>Roles Held</Text>
          </View>
          <View
            style={[
              styles.statCard,
              styles.statCardLast,
              {
                borderWidth: 0.75,
                borderColor: 'rgba(163, 130, 79, 0.35)',
                borderLeftWidth: 3,
                borderLeftColor: INK,
              },
            ]}>
            <Text style={styles.statValue}>{stats.domains}</Text>
            <Text style={styles.statLabel}>Domains</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Experience</Text>
        {EXPERIENCES.map((item) => (
          <View key={itemKey(item)} style={styles.experienceItem} wrap={false}>
            <Text style={styles.roleCompany}>
              {item.role} — {item.company}
            </Text>
            <Text style={styles.meta}>
              {item.location
                ? `${formatPeriod(item.start, item.end)} · ${item.location}`
                : formatPeriod(item.start, item.end)}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            {item.capabilities.length > 0 && (
              <Text style={styles.capabilities}>
                {item.capabilities.join(' · ')}
              </Text>
            )}
          </View>
        ))}

        <View style={styles.capabilitiesPanel} wrap={false}>
          <Text style={styles.capHeading}>Capabilities</Text>
          <Text style={styles.capIntro}>
            The stack changes from project to project — these are the areas I
            keep coming back to.
          </Text>
          {CAPABILITY_GROUPS.map((category, index) => (
            <View
              key={category.title}
              style={[
                styles.capRow,
                index === CAPABILITY_GROUPS.length - 1
                  ? styles.capRowLast
                  : undefined,
              ]}>
              <Text style={styles.capTitle}>{category.title}</Text>
              <Text style={styles.capSkills}>
                {category.capabilities.join(' · ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
