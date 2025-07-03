// Individual imports for each component used in this sample
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import "./App.css";

function App() {
  const handleViewReady = (
    event: HTMLArcgisMapElement["arcgisViewReadyChange"],
  ) => {
    const viewElement = event.target;
    console.log("View is ready:", viewElement);
  };

  const handleViewDoubleClick = (
    event: HTMLArcgisMapElement["arcgisViewDoubleClick"],
  ) => {
    console.log("View double-clicked:", event.detail.native);
    event.detail.stopPropagation(); // Prevent the event from propagating further
  };

  const handleViewDrag = (event: HTMLArcgisMapElement["arcgisViewDrag"]) => {
    if (event.detail.button === 2) {
      console.log("right click");
      event.detail.stopPropagation();
    }
  };

  return (
    <arcgis-map
      itemId="02b37471d5d84cacbebcccd785460e94"
      onarcgisViewReadyChange={handleViewReady}
      // constraints={
      //   {
      //     rotationEnabled: false,
      //   } as __esri.View2DConstraints
      // } // cast to View2DConstraints
      onarcgisViewDrag={handleViewDrag}
      onarcgisViewDoubleClick={handleViewDoubleClick}
    >
      <arcgis-zoom position="top-left" />
      <arcgis-search position="top-right" />
      <arcgis-legend position="bottom-left" />
    </arcgis-map>
  );
}

export default App;
