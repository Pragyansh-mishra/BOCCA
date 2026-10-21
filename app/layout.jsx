import './styles.css';

export const metadata = {
  title: 'BOCCA — Italian Coffee & Pizza House',
  description: 'BOCCA Italian Coffee & Pizza House in Dungarpur, Rajasthan.',
  icons: { icon: '/assets/media/684ff15232c39faab7fcc3a5_Favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
