# OverlayTypes

_Auto generated documentation for WebKit inspector

Exposes types to be used by the inspector overlay.


* Types
 * [Point](#class-point)
 * [Size](#class-size)
 * [Quad](#class-quad)
 * [Rect](#class-rect)
 * [Region](#class-region)
 * [DisplayPath](#class-displaypath)
 * [RegionFlowData](#class-regionflowdata)
 * [ContentFlowData](#class-contentflowdata)
 * [ShapeOutsideData](#class-shapeoutsidedata)
 * [ElementData](#class-elementdata)
 * [FragmentHighlightData](#class-fragmenthighlightdata)
 * [NodeHighlightData](#class-nodehighlightdata)
 * [OverlayConfiguration](#class-overlayconfiguration)


## Types

### Class: Point

_Type: object_

### Properties

_**x ( number )**_<br>
_**y ( number )**_<br>


### Class: Size

_Type: object_

### Properties

_**width ( integer )**_<br>
_**height ( integer )**_<br>


### Class: Quad

_Type: array_

A quad is a collection of 4 points. When initialized from a rect, the points are in clockwise order from top left.


### Class: Rect

_Type: object_

A rectangle specified by a reference coordinate and width/height offsets.

### Properties

_**x ( number )**_<br>
_**y ( number )**_<br>
_**width ( number )**_<br>
_**height ( number )**_<br>


### Class: Region

_Type: object_

A single region in a flow thread.

### Properties

_**borderQuad ( [Quad](#class-quad) )**_<br>
_**incomingQuad ( [Quad](#class-quad) )**_<br>
_**outgoingQuad ( [Quad](#class-quad) )**_<br>
_**isHighlighted ( optional boolean )**_<br>


### Class: DisplayPath

_Type: array_

A vector path described using SVG path syntax.


### Class: RegionFlowData

_Type: object_

### Properties

_**regions ( array of [Region](#class-region) )**_<br>
_**name ( string )**_<br>


### Class: ContentFlowData

_Type: object_

### Properties

_**name ( string )**_<br>


### Class: ShapeOutsideData

_Type: object_

### Properties

_**bounds ( [Quad](#class-quad) )**_<br>
> Bounds for the shape-outside paths.

_**shape ( optional [DisplayPath](#class-displaypath) )**_<br>
> Path for the element's shape.

_**marginShape ( optional [DisplayPath](#class-displaypath) )**_<br>
> Path for the element's margin shape.



### Class: ElementData

_Type: object_

Data that describes an element to be highlighted.

### Properties

_**tagName ( string )**_<br>
_**idValue ( string )**_<br>
> The value of the element's 'id' attribute.

_**className ( optional string )**_<br>
_**size ( optional [Size](#class-size) )**_<br>
_**role ( optional string )**_<br>
> Computed accessibility role for the element.

_**regionFlowData ( optional [RegionFlowData](#class-regionflowdata) )**_<br>
_**contentFlowData ( optional [ContentFlowData](#class-contentflowdata) )**_<br>
_**shapeOutsideData ( optional [ShapeOutsideData](#class-shapeoutsidedata) )**_<br>


### Class: FragmentHighlightData

_Type: object_

Data required to highlight multiple quads.

### Properties

_**quads ( array of [Quad](#class-quad) )**_<br>
> Quads for which the highlight should be applied.

_**contentColor ( string )**_<br>
_**contentOutlineColor ( string )**_<br>
_**paddingColor ( string )**_<br>
_**borderColor ( string )**_<br>
_**marginColor ( string )**_<br>
_**regionClippingArea ( optional [Quad](#class-quad) )**_<br>


### Class: NodeHighlightData

_Type: object_

Data required to highlight a DOM node.

### Properties

_**scrollOffset ( [Point](#class-point) )**_<br>
> Scroll offset for the MainFrame's FrameView that is shared across all quads.

_**fragments ( array of [FragmentHighlightData](#class-fragmenthighlightdata) )**_<br>
_**elementData ( optional [ElementData](#class-elementdata) )**_<br>


### Class: OverlayConfiguration

_Type: object_

Data required to configure the overlay's size and scaling behavior.

### Properties

_**deviceScaleFactor ( number )**_<br>
_**viewportSize ( [Size](#class-size) )**_<br>
_**frameViewFullSize ( [Size](#class-size) )**_<br>




