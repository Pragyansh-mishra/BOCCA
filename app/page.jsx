import LegacyPage from '../components/LegacyPage';
import { getLegacyPage } from '../lib/legacy-page';

export const metadata = { title: 'BOCCA — Italian Coffee & Pizza House' };

export default function HomePage() {
  return <LegacyPage {...getLegacyPage('index.html')} pageKey="home" />;
}
