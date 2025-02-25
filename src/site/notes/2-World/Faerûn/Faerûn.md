---
{"dg-publish":true,"permalink":"/2-world/faerun/faerun/","created":"2025-02-22T15:18:16.039-05:00","updated":"2025-02-24T20:02:14.858-05:00"}
---



> [!NOTE]- Quick Calculator  
> Map Height in Pixels: `INPUT[number:map_height_y]`  
> Map Width in Pixels: `INPUT[number:map_width_x]`  
> lat: `VIEW[{map_height_y} / 2][math]`  
> long: `VIEW[{map_width_x} / 2][math]`  
> How Many Pixels In Scale: `INPUT[number:scale_pixels]`  
> How Many Units in Scale: `INPUT[number:scale_pixels_range]`  
> Scale: `VIEW[1/({scale_pixels}/{scale_pixels_range})][math:mapCalc1]`

```leaflet  
id: Faerun-World-Map-id ### Must be unique with no spaces  
image: [[Faerun-World-Map.jpg]] ### Link to the map image file. Do not add a ! in front of the image  
bounds: [[0,0], [ 3185, 4763]] ### Size of the map in px Height_y, Width_x. Ignore 0,0  
height: 500px ### Size of the leaflet embed in px on your screen  
width: 85% ### Size of the leaflet embed in your note  
lat: 2300 ### To center the map, make this half of the map height.  
long: 1000 ### To center the map, make this half of the map width.  
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: mi ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Real units/px (resolution) of your map  
recenter: false  
darkmode: false ### marker
```
