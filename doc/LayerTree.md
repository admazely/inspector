# LayerTree

_Auto generated documentation for WebKit inspector `1.0`_

* Commands
 * [enable](#layertreeenablecallback)
 * [disable](#layertreedisablecallback)
 * [getLayerTree](#layertreegetlayertreecallback)
 * [nodeIdForLayerId](#layertreenodeidforlayeridlayerid-callback)
* Events
 * [layerTreeDidChange](#event-layertreedidchange)
* Types
 * [LayerId](#class-layerid)
 * [IntRect](#class-intrect)
 * [Layer](#class-layer)


## Commands

### LayerTree.enable(callback)

Enables compositing tree inspection.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### LayerTree.disable(callback)

Disables compositing tree inspection.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### LayerTree.getLayerTree(callback)

Returns the layer tree structure of the current page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**layerTree ( [Layer](#class-layer) )**_<br>
> Layer tree structure of the current page.



### LayerTree.nodeIdForLayerId([LayerId](#class-layerid), callback)

Returns the node id for a given layer id.

### Parameters

_**layerId ( [LayerId](#class-layerid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The node id for the given layer id.



## Events

### Event: layerTreeDidChange


## Types

### Class: LayerId

_Type: string_

Unique RenderLayer identifier.


### Class: IntRect

_Type: object_

A rectangle.

### Properties

_**x ( integer )**_<br>
> The x position.

_**y ( integer )**_<br>
> The y position.

_**width ( integer )**_<br>
> The width metric.

_**height ( integer )**_<br>
> The height metric.



### Class: Layer

_Type: object_

Information about a compositing layer.

### Properties

_**layerId ( [LayerId](#class-layerid) )**_<br>
> The unique id for this layer.

_**bounds ( [IntRect](#class-intrect) )**_<br>
> Bounds of the layer.

_**isComposited ( boolean )**_<br>
> Indicates whether this layer is composited.

_**paintCount ( optional integer )**_<br>
> Indicates how many time this layer has painted.

_**memory ( optional integer )**_<br>
> Estimated memory used by this layer.

_**compositedBounds ( optional [IntRect](#class-intrect) )**_<br>
> The bounds of the composited layer.

_**childLayers ( optional array of [Layer](#class-layer) )**_<br>
> Child layers.





