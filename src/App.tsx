import Button from "@/Shared/Button";

type Props = {};

export default function App({}: Props) {
  return (
    <>
      <Button />
      <div className="mb-4 bg-primary p-4 text-onPrimary shadow-elevation-1">
        <h2 className="text-display-lg">Note Sync</h2>
      </div>
      <div className="mb-4 bg-primaryContainer p-4 text-onPrimaryContainer shadow-elevation-2">
        <h2 className="text-display-md">Note Sync</h2>
      </div>
      <div className="mb-4 bg-secondary p-4 text-onSecondary shadow-elevation-3">
        <h2 className="text-display-sm">Note Sync</h2>
      </div>
      <div className="bg-secondaryContainer p-4 text-onSecondaryContainer">
        <h2 className="text-headline-lg">Note Sync</h2>
      </div>
      <div className="bg-tertiary p-4 text-onTertiary">
        <h2 className="text-headline-md">Note Sync</h2>
      </div>
      <div className="bg-tertiaryContainer p-4 text-onTertiaryContainer">
        <h2 className="text-headline-sm">Note Sync</h2>
      </div>
      <div className="bg-error p-4 text-onError">
        <h2 className="text-title-lg">Note Sync</h2>
      </div>
      <div className="bg-errorContainer p-4 text-onErrorContainer">
        <h2 className="text-title-md">Note Sync</h2>
      </div>
      <div className="bg-background p-4 text-onBackground">
        <h2 className="text-title-sm">Note Sync</h2>
      </div>
      <div className="bg-surface p-4 text-onSurface">
        <h2 className="text-body-lg">Note Sync</h2>
      </div>

      <div className="mt-9 bg-surfaceContainerLowest p-4 text-onSurface">
        <h2 className="text-body-md">Note Sync</h2>
      </div>
      <div className="bg-surfaceContainerLow p-4 text-onSurface">
        <h2 className="text-body-sm">Note Sync</h2>
      </div>
      <div className="bg-surfaceContainer p-4 text-onSurface">
        <h2 className="text-label-lg">Note Sync</h2>
      </div>
      <div className="bg-surfaceContainerHigh p-4 text-onSurface">
        <h2 className="text-label-lg">Note Sync</h2>
      </div>
      <div className="bg-surfaceContainerHighest p-4 text-onSurface">
        <h2 className="text-label-lg">Note Sync</h2>
      </div>
    </>
  );
}
