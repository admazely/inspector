# CSS

_Auto generated documentation for WebKit inspector `1.0`_
This domain exposes CSS read/write operations. All CSS objects, like stylesheets, rules, and styles, have an associated <code>id</code> used in subsequent operations on the related object. Each object type has a specific <code>id</code> structure, and those are not interchangeable between objects of different kinds. CSS objects can be loaded using the <code>get*ForNode()</code> calls (which accept a DOM node id). Alternatively, a client can discover all the existing stylesheets with the <code>getAllStyleSheets()</code> method and subsequently load the required stylesheet contents using the <code>getStyleSheet[Text]()</code> methods.


* Commands
 * [enable](#cssenablecallback)
 * [disable](#cssdisablecallback)
 * [getMatchedStylesForNode](#cssgetmatchedstylesfornodedomnodeid-includepseudo-includeinherited-callback)
 * [getInlineStylesForNode](#cssgetinlinestylesfornodedomnodeid-callback)
 * [getComputedStyleForNode](#cssgetcomputedstylefornodedomnodeid-callback)
 * [getAllStyleSheets](#cssgetallstylesheetscallback)
 * [getStyleSheet](#cssgetstylesheetstylesheetid-callback)
 * [getStyleSheetText](#cssgetstylesheettextstylesheetid-callback)
 * [setStyleSheetText](#csssetstylesheettextstylesheetid-text-callback)
 * [setPropertyText](#csssetpropertytextcssstyleid-propertyindex-text-overwrite-callback)
 * [toggleProperty](#csstogglepropertycssstyleid-propertyindex-disable-callback)
 * [setRuleSelector](#csssetruleselectorcssruleid-selector-callback)
 * [addRule](#cssaddruledomnodeid-selector-callback)
 * [getSupportedCSSProperties](#cssgetsupportedcsspropertiescallback)
 * [forcePseudoState](#cssforcepseudostatedomnodeid-forcedpseudoclasses-callback)
 * [startSelectorProfiler](#cssstartselectorprofilercallback)
 * [stopSelectorProfiler](#cssstopselectorprofilercallback)
 * [getNamedFlowCollection](#cssgetnamedflowcollectiondomnodeid-callback)
* Events
 * [mediaQueryResultChanged](#event-mediaqueryresultchanged)
 * [styleSheetChanged](#event-stylesheetchanged)
 * [namedFlowCreated](#event-namedflowcreated)
 * [namedFlowRemoved](#event-namedflowremoved)
 * [regionLayoutUpdated](#event-regionlayoutupdated)
* Types
 * [StyleSheetId](#class-stylesheetid)
 * [CSSStyleId](#class-cssstyleid)
 * [StyleSheetOrigin](#class-stylesheetorigin)
 * [CSSRuleId](#class-cssruleid)
 * [PseudoIdRules](#class-pseudoidrules)
 * [InheritedStyleEntry](#class-inheritedstyleentry)
 * [CSSStyleAttribute](#class-cssstyleattribute)
 * [CSSStyleSheetHeader](#class-cssstylesheetheader)
 * [CSSStyleSheetBody](#class-cssstylesheetbody)
 * [CSSRule](#class-cssrule)
 * [SourceRange](#class-sourcerange)
 * [ShorthandEntry](#class-shorthandentry)
 * [CSSPropertyInfo](#class-csspropertyinfo)
 * [CSSComputedStyleProperty](#class-csscomputedstyleproperty)
 * [CSSStyle](#class-cssstyle)
 * [CSSProperty](#class-cssproperty)
 * [CSSMedia](#class-cssmedia)
 * [SelectorProfileEntry](#class-selectorprofileentry)
 * [SelectorProfile](#class-selectorprofile)
 * [Region](#class-region)
 * [NamedFlow](#class-namedflow)


## Commands

### CSS.enable(callback)

Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been enabled until the result of this command is received.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.disable(callback)

Disables the CSS agent for the given page.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.getMatchedStylesForNode([DOM.NodeId](DOM.md#class-nodeid), [includePseudo], [includeInherited], callback)

Returns requested styles for a DOM node identified by `nodeId`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
_**includePseudo ( optional boolean )**_<br>
> Whether to include pseudo styles (default: true).

_**includeInherited ( optional boolean )**_<br>
> Whether to include inherited styles (default: true).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**matchedCSSRules ( optional array of [CSSRule](#class-cssrule))**_<br>
> CSS rules matching this node, from all applicable stylesheets.

_**pseudoElements ( optional array of [PseudoIdRules](#class-pseudoidrules))**_<br>
> Pseudo style rules for this node.

_**inherited ( optional array of [InheritedStyleEntry](#class-inheritedstyleentry))**_<br>
> A chain of inherited styles (from the immediate node parent up to the DOM tree root).



### CSS.getInlineStylesForNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM attributes) for a DOM node identified by `nodeId`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**inlineStyle ( optional [CSSStyle](#class-cssstyle))**_<br>
> Inline style for the specified DOM node.

_**attributesStyle ( optional [CSSStyle](#class-cssstyle))**_<br>
> Attribute-defined element style (e.g. resulting from "width=20 height=100%").



### CSS.getComputedStyleForNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the computed style for a DOM node identified by `nodeId`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**computedStyle ( array of [CSSComputedStyleProperty](#class-csscomputedstyleproperty))**_<br>
> Computed style for the specified DOM node.



### CSS.getAllStyleSheets(callback)

Returns metainfo entries for all known stylesheets.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**headers ( array of [CSSStyleSheetHeader](#class-cssstylesheetheader))**_<br>
> Descriptor entries for all available stylesheets.



### CSS.getStyleSheet([StyleSheetId](#class-stylesheetid), callback)

Returns stylesheet data for the specified `styleSheetId`.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**styleSheet ( [CSSStyleSheetBody](#class-cssstylesheetbody))**_<br>
> Stylesheet contents for the specified <code>styleSheetId</code>.



### CSS.getStyleSheetText([StyleSheetId](#class-stylesheetid), callback)

Returns the current textual content and the URL for a stylesheet.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**text ( string )**_<br>
> The stylesheet text.



### CSS.setStyleSheetText([StyleSheetId](#class-stylesheetid), text, callback)

Sets the new stylesheet text, thereby invalidating all existing `CSSStyleId`'s and `CSSRuleId`'s contained by this stylesheet.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
_**text ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.setPropertyText([CSSStyleId](#class-cssstyleid), propertyIndex, text, overwrite, callback)

Sets the new `text` for a property in the respective style, at offset `propertyIndex`. If `overwrite` is `true`, a property at the given offset is overwritten, otherwise inserted. `text` entirely replaces the property `name: value`.

### Parameters

_**styleId ( [CSSStyleId](#class-cssstyleid))**_<br>
_**propertyIndex ( integer )**_<br>
_**text ( string )**_<br>
_**overwrite ( boolean )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**style ( [CSSStyle](#class-cssstyle))**_<br>
> The resulting style after the property text modification.



### CSS.toggleProperty([CSSStyleId](#class-cssstyleid), propertyIndex, disable, callback)

Toggles the property in the respective style, at offset `propertyIndex`. The `disable` parameter denotes whether the property should be disabled (i.e. removed from the style declaration). If `disable == false`, the property gets put back into its original place in the style declaration.

### Parameters

_**styleId ( [CSSStyleId](#class-cssstyleid))**_<br>
_**propertyIndex ( integer )**_<br>
_**disable ( boolean )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**style ( [CSSStyle](#class-cssstyle))**_<br>
> The resulting style after the property toggling.



### CSS.setRuleSelector([CSSRuleId](#class-cssruleid), selector, callback)

Modifies the rule selector.

### Parameters

_**ruleId ( [CSSRuleId](#class-cssruleid))**_<br>
_**selector ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**rule ( [CSSRule](#class-cssrule))**_<br>
> The resulting rule after the selector modification.



### CSS.addRule([DOM.NodeId](DOM.md#class-nodeid), selector, callback)

Creates a new empty rule with the given `selector` in a special "inspector" stylesheet in the owner document of the context node.

### Parameters

_**contextNodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
_**selector ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**rule ( [CSSRule](#class-cssrule))**_<br>
> The newly created rule.



### CSS.getSupportedCSSProperties(callback)

Returns all supported CSS property names.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**cssProperties ( array of [CSSPropertyInfo](#class-csspropertyinfo))**_<br>
> Supported property metainfo.



### CSS.forcePseudoState([DOM.NodeId](DOM.md#class-nodeid), forcedPseudoClasses, callback)

Ensures that the given node will have specified pseudo-classes whenever its style is computed by the browser.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> The element id for which to force the pseudo state.

_**forcedPseudoClasses ( array )**_<br>
> Element pseudo classes to force when computing the element's style.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.startSelectorProfiler(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.stopSelectorProfiler(callback)

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**profile ( [SelectorProfile](#class-selectorprofile))**_<br>


### CSS.getNamedFlowCollection([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the Named Flows from the document.

### Parameters

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> The document node id for which to get the Named Flow Collection.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**namedFlows ( array of [NamedFlow](#class-namedflow))**_<br>
> An array containing the Named Flows in the document.



## Events

### Event: mediaQueryResultChanged


### Event: styleSheetChanged

### Results

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>


### Event: namedFlowCreated

### Results

_**namedFlow ( [NamedFlow](#class-namedflow))**_<br>
> The new Named Flow.



### Event: namedFlowRemoved

### Results

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> The document node id.

_**flowName ( string )**_<br>
> Identifier of the removed Named Flow.



### Event: regionLayoutUpdated

### Results

_**namedFlow ( [NamedFlow](#class-namedflow))**_<br>
> The Named Flow whose layout may have changed.



## Types

### Class: StyleSheetId

_Type: string_


### Class: CSSStyleId

_Type: object_

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
> Enclosing stylesheet identifier.

_**ordinal ( integer )**_<br>
> The style ordinal within the stylesheet.



### Class: StyleSheetOrigin

_Type: string_


### Class: CSSRuleId

_Type: object_

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
> Enclosing stylesheet identifier.

_**ordinal ( integer )**_<br>
> The rule ordinal within the stylesheet.



### Class: PseudoIdRules

_Type: object_

### Properties

_**pseudoId ( integer )**_<br>
> Pseudo style identifier (see <code>enum PseudoId</code> in <code>RenderStyleConstants.h</code>).

_**rules ( array of [CSSRule](#class-cssrule))**_<br>
> CSS rules applicable to the pseudo style.



### Class: InheritedStyleEntry

_Type: object_

### Properties

_**inlineStyle ( optional [CSSStyle](#class-cssstyle))**_<br>
> The ancestor node's inline style, if any, in the style inheritance chain.

_**matchedCSSRules ( array of [CSSRule](#class-cssrule))**_<br>
> CSS rules matching the ancestor node in the style inheritance chain.



### Class: CSSStyleAttribute

_Type: object_

### Properties

_**name ( string )**_<br>
> DOM attribute name (e.g. "width").

_**style ( [CSSStyle](#class-cssstyle))**_<br>
> CSS style generated by the respective DOM attribute.



### Class: CSSStyleSheetHeader

_Type: object_

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
> The stylesheet identifier.

_**frameId ( [Network.FrameId](Network.md#class-frameid))**_<br>
> Owner frame identifier.

_**sourceURL ( string )**_<br>
> Stylesheet resource URL.

_**origin ( [StyleSheetOrigin](#class-stylesheetorigin))**_<br>
> Stylesheet origin.

_**title ( string )**_<br>
> Stylesheet title.

_**disabled ( boolean )**_<br>
> Denotes whether the stylesheet is disabled.



### Class: CSSStyleSheetBody

_Type: object_

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid))**_<br>
> The stylesheet identifier.

_**rules ( array of [CSSRule](#class-cssrule))**_<br>
> Stylesheet resource URL.

_**text ( optional string )**_<br>
> Stylesheet resource contents (if available).



### Class: CSSRule

_Type: object_

### Properties

_**ruleId ( optional [CSSRuleId](#class-cssruleid))**_<br>
> The CSS rule identifier (absent for user agent stylesheet and user-specified stylesheet rules).

_**selectorText ( string )**_<br>
> Rule selector.

_**sourceURL ( optional string )**_<br>
> Parent stylesheet resource URL (for regular rules).

_**sourceLine ( integer )**_<br>
> Line ordinal of the rule selector start character in the resource.

_**origin ( [StyleSheetOrigin](#class-stylesheetorigin))**_<br>
> Parent stylesheet's origin.

_**style ( [CSSStyle](#class-cssstyle))**_<br>
> Associated style declaration.

_**selectorRange ( optional [SourceRange](#class-sourcerange))**_<br>
> The rule selector range in the underlying resource (if available).

_**media ( optional array of [CSSMedia](#class-cssmedia))**_<br>
> Media list array (for rules involving media queries). The array enumerates media queries starting with the innermost one, going outwards.



### Class: SourceRange

_Type: object_

### Properties

_**start ( integer )**_<br>
> Start of range (inclusive).

_**end ( integer )**_<br>
> End of range (exclusive).



### Class: ShorthandEntry

_Type: object_

### Properties

_**name ( string )**_<br>
> Shorthand name.

_**value ( string )**_<br>
> Shorthand value.



### Class: CSSPropertyInfo

_Type: object_

### Properties

_**name ( string )**_<br>
> Property name.

_**longhands ( optional array )**_<br>
> Longhand property names.



### Class: CSSComputedStyleProperty

_Type: object_

### Properties

_**name ( string )**_<br>
> Computed style property name.

_**value ( string )**_<br>
> Computed style property value.



### Class: CSSStyle

_Type: object_

### Properties

_**styleId ( optional [CSSStyleId](#class-cssstyleid))**_<br>
> The CSS style identifier (absent for attribute styles).

_**cssProperties ( array of [CSSProperty](#class-cssproperty))**_<br>
> CSS properties in the style.

_**shorthandEntries ( array of [ShorthandEntry](#class-shorthandentry))**_<br>
> Computed values for all shorthands found in the style.

_**cssText ( optional string )**_<br>
> Style declaration text (if available).

_**range ( optional [SourceRange](#class-sourcerange))**_<br>
> Style declaration range in the enclosing stylesheet (if available).

_**width ( optional string )**_<br>
> The effective "width" property value from this style.

_**height ( optional string )**_<br>
> The effective "height" property value from this style.



### Class: CSSProperty

_Type: object_

### Properties

_**name ( string )**_<br>
> The property name.

_**value ( string )**_<br>
> The property value.

_**priority ( optional string )**_<br>
> The property priority (implies "" if absent).

_**implicit ( optional boolean )**_<br>
> Whether the property is implicit (implies <code>false</code> if absent).

_**text ( optional string )**_<br>
> The full property text as specified in the style.

_**parsedOk ( optional boolean )**_<br>
> Whether the property is understood by the browser (implies <code>true</code> if absent).

_**status ( optional string )**_<br>
> The property status: "active" (implied if absent) if the property is effective in the style, "inactive" if the property is overridden by a same-named property in this style later on, "disabled" if the property is disabled by the user, "style" if the property is reported by the browser rather than by the CSS source parser.

_**range ( optional [SourceRange](#class-sourcerange))**_<br>
> The entire property range in the enclosing style declaration (if available).



### Class: CSSMedia

_Type: object_

### Properties

_**text ( string )**_<br>
> Media query text.

_**source ( string )**_<br>
> Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline stylesheet's STYLE tag.

_**sourceURL ( optional string )**_<br>
> URL of the document containing the media query description.

_**sourceLine ( optional integer )**_<br>
> Line in the document containing the media query (not defined for the "stylesheet" source).



### Class: SelectorProfileEntry

_Type: object_

### Properties

_**selector ( string )**_<br>
> CSS selector of the corresponding rule.

_**url ( string )**_<br>
> URL of the resource containing the corresponding rule.

_**lineNumber ( integer )**_<br>
> Selector line number in the resource for the corresponding rule.

_**time ( number )**_<br>
> Total time this rule handling contributed to the browser running time during profiling (in milliseconds.)

_**hitCount ( integer )**_<br>
> Number of times this rule was considered a candidate for matching against DOM elements.

_**matchCount ( integer )**_<br>
> Number of times this rule actually matched a DOM element.



### Class: SelectorProfile

_Type: object_

### Properties

_**totalTime ( number )**_<br>
> Total processing time for all selectors in the profile (in milliseconds.)

_**data ( array of [SelectorProfileEntry](#class-selectorprofileentry))**_<br>
> CSS selector profile entries.



### Class: Region

_Type: object_

### Properties

_**regionOverset ( string )**_<br>
> The "overset" attribute of a Named Flow.

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> The corresponding DOM node id.



### Class: NamedFlow

_Type: object_

### Properties

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> The document node id.

_**name ( string )**_<br>
> Named Flow identifier.

_**overset ( boolean )**_<br>
> The "overset" attribute of a Named Flow.

_**content ( array of [DOM.NodeId](DOM.md#class-nodeid))**_<br>
> An array of nodes that flow into the Named Flow.

_**regions ( array of [Region](#class-region))**_<br>
> An array of regions associated with the Named Flow.





