import LegacyPage from '../../components/LegacyPage';
import { getLegacyPage } from '../../lib/legacy-page';

export const metadata = { title: 'Reservation — BOCCA Italian Coffee & Pizza House' };

export default function ReservationPage() {
  return <LegacyPage {...getLegacyPage('reservation.html')} pageKey="reservation" />;
}
