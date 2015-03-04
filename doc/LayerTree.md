# LayerTree

_Auto generated documentation for WebKit inspector

* Commands
 * [enable](#layertreeenablecallback)
 * [disable](#layertreedisablecallback)
 * [layersForNode](#layertreelayersfornodedomnodeid-callback)
 * [reasonsForCompositingLayer](#layertreereasonsforcompositinglayerlayerid-callback)
* Events
 * [layerTreeDidChange](#event-layertreedidchange)
* Types
 * [LayerId](#class-layerid)
 * [PseudoElementId](#class-pseudoelementid)
 * [IntRect](#class-intrect)
 * [Layer](#class-layer)
 * [CompositingReasons](#class-compositingreasons)


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


### LayerTree.layersForNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the layer tree structure of the current page.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> Root of the subtree for which we want to gather layers.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**layers ( array of [Layer](#class-layer) )**_<br>
> Child layers.



### LayerTree.reasonsForCompositingLayer([LayerId](#class-layerid), callback)

Provides the reasons why the given layer was composited.

### Parameters

_**layerId ( [LayerId](#class-layerid) )**_<br>
> The id of the layer for which we want to get the reasons it was composited.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**compositingReasons ( [CompositingReasons](#class-compositingreasons) )**_<br>
> An object containing the reasons why the layer was composited as properties.



## Events

### Event: layerTreeDidChange


## Types

### Class: LayerId

_Type: string_

Unique RenderLayer identifier.


### Class: PseudoElementId

_Type: string_

Unique PseudoElement identifier.


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

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The id for the node associated with this layer.

_**bounds ( [IntRect](#class-intrect) )**_<br>
> Bounds of the layer in absolute page coordinates.

_**paintCount ( integer )**_<br>
> Indicates how many time this layer has painted.

_**memory ( integer )**_<br>
> Estimated memory used by this layer.

_**compositedBounds ( [IntRect](#class-intrect) )**_<br>
> The bounds of the composited layer.

_**isInShadowTree ( optional boolean )**_<br>
> Indicates whether this layer is associated with an element hosted in a shadow tree.

_**isReflection ( optional boolean )**_<br>
> Indicates whether this layer was used to provide a reflection for the element.

_**isGeneratedContent ( optional boolean )**_<br>
> Indicates whether the layer is attached to a pseudo element that is CSS generated content.

_**isAnonymous ( optional boolean )**_<br>
> Indicates whether the layer was created for a CSS anonymous block or box.

_**pseudoElementId ( optional [PseudoElementId](#class-pseudoelementid) )**_<br>
> The id for the pseudo element associated with this layer.

_**pseudoElement ( optional string )**_<br>
> The name of the CSS pseudo-element that prompted the layer to be generated.



### Class: CompositingReasons

_Type: object_

An object containing the reasons why the layer was composited as properties.

### Properties

_**transform3D ( optional boolean )**_<br>
> Composition due to association with an element with a CSS 3D transform.

_**video ( optional boolean )**_<br>
> Composition due to association with a <video> element.

_**canvas ( optional boolean )**_<br>
> Composition due to the element being a <canvas> element.

_**plugin ( optional boolean )**_<br>
> Composition due to association with a plugin.

_**iFrame ( optional boolean )**_<br>
> Composition due to association with an <iframe> element.

_**backfaceVisibilityHidden ( optional boolean )**_<br>
> Composition due to association with an element with a "backface-visibility: hidden" style.

_**clipsCompositingDescendants ( optional boolean )**_<br>
> Composition due to association with an element clipping compositing descendants.

_**animation ( optional boolean )**_<br>
> Composition due to association with an animated element.

_**filters ( optional boolean )**_<br>
> Composition due to association with an element with CSS filters applied.

_**positionFixed ( optional boolean )**_<br>
> Composition due to association with an element with a "position: fixed" style.

_**positionSticky ( optional boolean )**_<br>
> Composition due to association with an element with a "position: sticky" style.

_**overflowScrollingTouch ( optional boolean )**_<br>
> Composition due to association with an element with a "overflow-scrolling: touch" style.

_**stacking ( optional boolean )**_<br>
> Composition due to association with an element establishing a stacking context.

_**overlap ( optional boolean )**_<br>
> Composition due to association with an element overlapping other composited elements.

_**negativeZIndexChildren ( optional boolean )**_<br>
> Composition due to association with an element with descendants that have a negative z-index.

_**transformWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with an element with composited descendants.

_**opacityWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with an element with opacity applied and composited descendants.

_**maskWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with a masked element and composited descendants.

_**reflectionWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with an element with a reflection and composited descendants.

_**filterWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with an element with CSS filters applied and composited descendants.

_**blendingWithCompositedDescendants ( optional boolean )**_<br>
> Composition due to association with an element with CSS blending applied and composited descendants.

_**isolatesCompositedBlendingDescendants ( optional boolean )**_<br>
> Composition due to association with an element isolating compositing descendants having CSS blending applied.

_**perspective ( optional boolean )**_<br>
> Composition due to association with an element with perspective applied.

_**preserve3D ( optional boolean )**_<br>
> Composition due to association with an element with a "transform-style: preserve-3d" style.

_**root ( optional boolean )**_<br>
> Composition due to association with the root element.

_**blending ( optional boolean )**_<br>
> Composition due to association with an element with a "blend-mode" style.





