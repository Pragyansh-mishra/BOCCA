import LegacyPage from '../../components/LegacyPage';
import { getLegacyPage } from '../../lib/legacy-page';

export const metadata = { title: 'About Us — BOCCA Italian Coffee & Pizza House' };

export default function AboutPage() {
  return <LegacyPage {...getLegacyPage('about.html')} pageKey="about" />;
}
