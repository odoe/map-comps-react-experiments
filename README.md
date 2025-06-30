# Demo Map Comonents React App

This demo shows:

1. Disable rotation
2. Disable double-click

```tsx
  const handleViewReady = (event: HTMLArcgisMapElement["arcgisViewReadyChange"]) => {
    const viewElement = event.target;
    console.log("View is ready:", viewElement);
  };

  const handleViewDoubleClick = (event: HTMLArcgisMapElement["arcgisViewDoubleClick"]) => {
    console.log("View double-clicked:", event.detail.native);
    event.detail.stopPropagation(); // Prevent the event from propagating further
  };

  return (
    <arcgis-map
      itemId="02b37471d5d84cacbebcccd785460e94"
      onarcgisViewReadyChange={handleViewReady}
      constraints={{
        rotationEnabled: false,
      } as __esri.View2DConstraints} // cast to View2DConstraints
      onarcgisViewDoubleClick={handleViewDoubleClick}
    >
      <arcgis-zoom position="top-left" />
      <arcgis-search position="top-right" />
      <arcgis-legend position="bottom-left" />
    </arcgis-map>
  );
```