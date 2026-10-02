import {computeCareerStats} from '@site/src/utils/careerStats';
import {CareerStats} from '@site/src/components/Stats';
import {EXPERIENCES} from '@site/src/data/experiences';

export const CAREER_STATS: CareerStats = computeCareerStats(EXPERIENCES);
