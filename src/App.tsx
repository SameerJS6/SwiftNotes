type Props = {};

export default function App({}: Props) {
  return (
    <>
      <div className="bg-primary text-onPrimary shadow-elevation-1 mb-4 p-4">
        <h2 className="text-display-lg">Note Sync</h2>
      </div>
      <div className="bg-primaryContainer text-onPrimaryContainer shadow-elevation-2 mb-4 p-4">
        <h2 className="text-display-md">Note Sync</h2>
      </div>
      <div className="bg-secondary text-onSecondary shadow-elevation-3 mb-4 p-4">
        <h2 className="text-display-sm">Note Sync</h2>
      </div>
      <div className="bg-secondaryContainer text-onSecondayContainer p-4">
        <h2 className="text-headline-lg">Note Sync</h2>
      </div>
      <div className="bg-tertiary text-onTertiary p-4">
        <h2 className="text-headline-md">Note Sync</h2>
      </div>
      <div className="bg-tertiaryContainer text-onTertiaryContainer p-4">
        <h2 className="text-headline-sm">Note Sync</h2>
      </div>
      <div className="bg-error text-onError p-4">
        <h2 className="text-title-lg">Note Sync</h2>
      </div>
      <div className="bg-errorContainer text-onErrorContainer p-4">
        <h2 className="text-title-md">Note Sync</h2>
      </div>
      <div className="bg-background text-onBackground p-4">
        <h2 className="text-title-sm">Note Sync</h2>
      </div>
      <div className="bg-surface text-onSurface p-4">
        <h2 className="text-body-lg">Note Sync</h2>
      </div>

      <div className="bg-scrimContainer text-onSurface p-4">
        <h2 className="text-body-md">Note Sync</h2>
      </div>
      <div className="bg-scrimControl text-onSurface p-4">
        <h2 className="text-body-sm">Note Sync</h2>
      </div>
      <div className="bg-scrimControlPressed text-onSurface p-4">
        <h2 className="text-label-lg">Note Sync</h2>
      </div>
    </>
  );
}
