import LegacyPage from '../../components/LegacyPage';
import { getLegacyPage } from '../../lib/legacy-page';

export const metadata = { title: 'Menu — BOCCA Italian Coffee & Pizza House' };

export default function MenuPage() {
  return <LegacyPage {...getLegacyPage('menu.html')} pageKey="menu" />;
}
