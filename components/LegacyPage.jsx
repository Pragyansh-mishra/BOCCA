import LegacyBehavior from './LegacyBehavior';

export default function LegacyPage({ html, pageKey }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LegacyBehavior pageKey={pageKey} />
    </>
  );
}
