# CSS

_Auto generated documentation for WebKit inspector

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
 * [setStyleText](#csssetstyletextcssstyleid-text-callback)
 * [setRuleSelector](#csssetruleselectorcssruleid-selector-callback)
 * [addRule](#cssaddruledomnodeid-selector-callback)
 * [getSupportedCSSProperties](#cssgetsupportedcsspropertiescallback)
 * [forcePseudoState](#cssforcepseudostatedomnodeid-forcedpseudoclasses-callback)
 * [getNamedFlowCollection](#cssgetnamedflowcollectiondomnodeid-callback)
* Events
 * [mediaQueryResultChanged](#event-mediaqueryresultchanged)
 * [styleSheetChanged](#event-stylesheetchanged)
 * [namedFlowCreated](#event-namedflowcreated)
 * [namedFlowRemoved](#event-namedflowremoved)
 * [regionOversetChanged](#event-regionoversetchanged)
 * [registeredNamedFlowContentElement](#event-registerednamedflowcontentelement)
 * [unregisteredNamedFlowContentElement](#event-unregisterednamedflowcontentelement)
* Types
 * [StyleSheetId](#class-stylesheetid)
 * [CSSStyleId](#class-cssstyleid)
 * [StyleSheetOrigin](#class-stylesheetorigin)
 * [CSSRuleId](#class-cssruleid)
 * [PseudoIdMatches](#class-pseudoidmatches)
 * [InheritedStyleEntry](#class-inheritedstyleentry)
 * [RuleMatch](#class-rulematch)
 * [CSSSelector](#class-cssselector)
 * [SelectorList](#class-selectorlist)
 * [CSSStyleAttribute](#class-cssstyleattribute)
 * [CSSStyleSheetHeader](#class-cssstylesheetheader)
 * [CSSStyleSheetBody](#class-cssstylesheetbody)
 * [CSSRule](#class-cssrule)
 * [SourceRange](#class-sourcerange)
 * [ShorthandEntry](#class-shorthandentry)
 * [CSSPropertyInfo](#class-csspropertyinfo)
 * [CSSComputedStyleProperty](#class-csscomputedstyleproperty)
 * [CSSStyle](#class-cssstyle)
 * [CSSPropertyStatus](#class-csspropertystatus)
 * [CSSProperty](#class-cssproperty)
 * [CSSMedia](#class-cssmedia)
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

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
_**includePseudo ( optional boolean )**_<br>
> Whether to include pseudo styles (default: true).

_**includeInherited ( optional boolean )**_<br>
> Whether to include inherited styles (default: true).

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**matchedCSSRules ( optional array of [RuleMatch](#class-rulematch) )**_<br>
> CSS rules matching this node, from all applicable stylesheets.

_**pseudoElements ( optional array of [PseudoIdMatches](#class-pseudoidmatches) )**_<br>
> Pseudo style matches for this node.

_**inherited ( optional array of [InheritedStyleEntry](#class-inheritedstyleentry) )**_<br>
> A chain of inherited styles (from the immediate node parent up to the DOM tree root).



### CSS.getInlineStylesForNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM attributes) for a DOM node identified by `nodeId`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**inlineStyle ( optional [CSSStyle](#class-cssstyle) )**_<br>
> Inline style for the specified DOM node.

_**attributesStyle ( optional [CSSStyle](#class-cssstyle) )**_<br>
> Attribute-defined element style (e.g. resulting from "width=20 height=100%").



### CSS.getComputedStyleForNode([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the computed style for a DOM node identified by `nodeId`.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**computedStyle ( array of [CSSComputedStyleProperty](#class-csscomputedstyleproperty) )**_<br>
> Computed style for the specified DOM node.



### CSS.getAllStyleSheets(callback)

Returns metainfo entries for all known stylesheets.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**headers ( array of [CSSStyleSheetHeader](#class-cssstylesheetheader) )**_<br>
> Descriptor entries for all available stylesheets.



### CSS.getStyleSheet([StyleSheetId](#class-stylesheetid), callback)

Returns stylesheet data for the specified `styleSheetId`.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**styleSheet ( [CSSStyleSheetBody](#class-cssstylesheetbody) )**_<br>
> Stylesheet contents for the specified <code>styleSheetId</code>.



### CSS.getStyleSheetText([StyleSheetId](#class-stylesheetid), callback)

Returns the current textual content and the URL for a stylesheet.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**text ( string )**_<br>
> The stylesheet text.



### CSS.setStyleSheetText([StyleSheetId](#class-stylesheetid), text, callback)

Sets the new stylesheet text, thereby invalidating all existing `CSSStyleId`'s and `CSSRuleId`'s contained by this stylesheet.

### Parameters

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
_**text ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.setStyleText([CSSStyleId](#class-cssstyleid), text, callback)

Sets the new `text` for the respective style.

### Parameters

_**styleId ( [CSSStyleId](#class-cssstyleid) )**_<br>
_**text ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**style ( [CSSStyle](#class-cssstyle) )**_<br>
> The resulting style after the text modification.



### CSS.setRuleSelector([CSSRuleId](#class-cssruleid), selector, callback)

Modifies the rule selector.

### Parameters

_**ruleId ( [CSSRuleId](#class-cssruleid) )**_<br>
_**selector ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**rule ( [CSSRule](#class-cssrule) )**_<br>
> The resulting rule after the selector modification.



### CSS.addRule([DOM.NodeId](DOM.md#class-nodeid), selector, callback)

Creates a new empty rule with the given `selector` in a special "inspector" stylesheet in the owner document of the context node.

### Parameters

_**contextNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
_**selector ( string )**_<br>
_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**rule ( [CSSRule](#class-cssrule) )**_<br>
> The newly created rule.



### CSS.getSupportedCSSProperties(callback)

Returns all supported CSS property names.

### Parameters

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**cssProperties ( array of [CSSPropertyInfo](#class-csspropertyinfo) )**_<br>
> Supported property metainfo.



### CSS.forcePseudoState([DOM.NodeId](DOM.md#class-nodeid), forcedPseudoClasses, callback)

Ensures that the given node will have specified pseudo-classes whenever its style is computed by the browser.

### Parameters

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The element id for which to force the pseudo state.

_**forcedPseudoClasses ( array enumerated ["active","focus","hover","visited"] )**_<br>
> Element pseudo classes to force when computing the element's style.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>


### CSS.getNamedFlowCollection([DOM.NodeId](DOM.md#class-nodeid), callback)

Returns the Named Flows from the document.

### Parameters

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The document node id for which to get the Named Flow Collection.

_**callback ( function )**_<br>

### Results

_**error ( error )**_<br>
_**namedFlows ( array of [NamedFlow](#class-namedflow) )**_<br>
> An array containing the Named Flows in the document.



## Events

### Event: mediaQueryResultChanged

Fires whenever a MediaQuery result changes (for example, after a browser window has been resized.) The current implementation considers only viewport-dependent media features.


### Event: styleSheetChanged

Fired whenever a stylesheet is changed as a result of the client operation.

### Results

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>


### Event: namedFlowCreated

Fires when a Named Flow is created.

### Results

_**namedFlow ( [NamedFlow](#class-namedflow) )**_<br>
> The new Named Flow.



### Event: namedFlowRemoved

Fires when a Named Flow is removed: has no associated content nodes and regions.

### Results

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The document node id.

_**flowName ( string )**_<br>
> Identifier of the removed Named Flow.



### Event: regionOversetChanged

Fires if any of the regionOverset values changed in a Named Flow's region chain.

### Results

_**namedFlow ( [NamedFlow](#class-namedflow) )**_<br>
> The Named Flow containing the regions whose regionOverset values changed.



### Event: registeredNamedFlowContentElement

Fires when a Named Flow's has been registered with a new content node.

### Results

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The document node id.

_**flowName ( string )**_<br>
> Named Flow identifier for which the new content element was registered.

_**contentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The node id of the registered content node.

_**nextContentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The node id of the element following the registered content node.



### Event: unregisteredNamedFlowContentElement

Fires when a Named Flow's has been registered with a new content node.

### Results

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The document node id.

_**flowName ( string )**_<br>
> Named Flow identifier for which the new content element was unregistered.

_**contentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The node id of the unregistered content node.



## Types

### Class: StyleSheetId

_Type: string_


### Class: CSSStyleId

_Type: object_

This object identifies a CSS style in a unique way.

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
> Enclosing stylesheet identifier.

_**ordinal ( integer )**_<br>
> The style ordinal within the stylesheet.



### Class: StyleSheetOrigin

_Type: string_

Stylesheet type: "user" for user stylesheets, "user-agent" for user-agent stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via inspector" rules), "regular" for regular stylesheets.


### Class: CSSRuleId

_Type: object_

This object identifies a CSS rule in a unique way.

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
> Enclosing stylesheet identifier.

_**ordinal ( integer )**_<br>
> The rule ordinal within the stylesheet.



### Class: PseudoIdMatches

_Type: object_

CSS rule collection for a single pseudo style.

### Properties

_**pseudoId ( integer )**_<br>
> Pseudo style identifier (see <code>enum PseudoId</code> in <code>RenderStyleConstants.h</code>).

_**matches ( array of [RuleMatch](#class-rulematch) )**_<br>
> Matches of CSS rules applicable to the pseudo style.



### Class: InheritedStyleEntry

_Type: object_

CSS rule collection for a single pseudo style.

### Properties

_**inlineStyle ( optional [CSSStyle](#class-cssstyle) )**_<br>
> The ancestor node's inline style, if any, in the style inheritance chain.

_**matchedCSSRules ( array of [RuleMatch](#class-rulematch) )**_<br>
> Matches of CSS rules matching the ancestor node in the style inheritance chain.



### Class: RuleMatch

_Type: object_

Match data for a CSS rule.

### Properties

_**rule ( [CSSRule](#class-cssrule) )**_<br>
> CSS rule in the match.

_**matchingSelectors ( array )**_<br>
> Matching selector indices in the rule's selectorList selectors (0-based).



### Class: CSSSelector

_Type: object_

CSS selector.

### Properties

_**text ( string )**_<br>
> Canonicalized selector text.

_**specificity ( optional array )**_<br>
> Specificity (a, b, c) tuple. Included if the selector is sent in response to CSS.getMatchedStylesForNode which provides a context element.

_**dynamic ( optional boolean )**_<br>
> Whether or not the specificity can be dynamic. Included if the selector is sent in response to CSS.getMatchedStylesForNode which provides a context element.



### Class: SelectorList

_Type: object_

Selector list data.

### Properties

_**selectors ( array of [CSSSelector](#class-cssselector) )**_<br>
> Selectors in the list.

_**text ( string )**_<br>
> Rule selector text.

_**range ( optional [SourceRange](#class-sourcerange) )**_<br>
> Rule selector range in the underlying resource (if available).



### Class: CSSStyleAttribute

_Type: object_

CSS style information for a DOM style attribute.

### Properties

_**name ( string )**_<br>
> DOM attribute name (e.g. "width").

_**style ( [CSSStyle](#class-cssstyle) )**_<br>
> CSS style generated by the respective DOM attribute.



### Class: CSSStyleSheetHeader

_Type: object_

CSS stylesheet metainformation.

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
> The stylesheet identifier.

_**frameId ( [Network.FrameId](Network.md#class-frameid) )**_<br>
> Owner frame identifier.

_**sourceURL ( string )**_<br>
> Stylesheet resource URL.

_**origin ( [StyleSheetOrigin](#class-stylesheetorigin) )**_<br>
> Stylesheet origin.

_**title ( string )**_<br>
> Stylesheet title.

_**disabled ( boolean )**_<br>
> Denotes whether the stylesheet is disabled.



### Class: CSSStyleSheetBody

_Type: object_

CSS stylesheet contents.

### Properties

_**styleSheetId ( [StyleSheetId](#class-stylesheetid) )**_<br>
> The stylesheet identifier.

_**rules ( array of [CSSRule](#class-cssrule) )**_<br>
> Stylesheet resource URL.

_**text ( optional string )**_<br>
> Stylesheet resource contents (if available).



### Class: CSSRule

_Type: object_

CSS rule representation.

### Properties

_**ruleId ( optional [CSSRuleId](#class-cssruleid) )**_<br>
> The CSS rule identifier (absent for user agent stylesheet and user-specified stylesheet rules).

_**selectorList ( [SelectorList](#class-selectorlist) )**_<br>
> Rule selector data.

_**sourceURL ( optional string )**_<br>
> Parent stylesheet resource URL (for regular rules).

_**sourceLine ( integer )**_<br>
> Line ordinal of the rule selector start character in the resource.

_**origin ( [StyleSheetOrigin](#class-stylesheetorigin) )**_<br>
> Parent stylesheet's origin.

_**style ( [CSSStyle](#class-cssstyle) )**_<br>
> Associated style declaration.

_**media ( optional array of [CSSMedia](#class-cssmedia) )**_<br>
> Media list array (for rules involving media queries). The array enumerates media queries starting with the innermost one, going outwards.



### Class: SourceRange

_Type: object_

Text range within a resource.

### Properties

_**startLine ( integer )**_<br>
> Start line of range.

_**startColumn ( integer )**_<br>
> Start column of range (inclusive).

_**endLine ( integer )**_<br>
> End line of range

_**endColumn ( integer )**_<br>
> End column of range (exclusive).



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

_**values ( optional array )**_<br>
> Supported values for this property.



### Class: CSSComputedStyleProperty

_Type: object_

### Properties

_**name ( string )**_<br>
> Computed style property name.

_**value ( string )**_<br>
> Computed style property value.



### Class: CSSStyle

_Type: object_

CSS style representation.

### Properties

_**styleId ( optional [CSSStyleId](#class-cssstyleid) )**_<br>
> The CSS style identifier (absent for attribute styles).

_**cssProperties ( array of [CSSProperty](#class-cssproperty) )**_<br>
> CSS properties in the style.

_**shorthandEntries ( array of [ShorthandEntry](#class-shorthandentry) )**_<br>
> Computed values for all shorthands found in the style.

_**cssText ( optional string )**_<br>
> Style declaration text (if available).

_**range ( optional [SourceRange](#class-sourcerange) )**_<br>
> Style declaration range in the enclosing stylesheet (if available).

_**width ( optional string )**_<br>
> The effective "width" property value from this style.

_**height ( optional string )**_<br>
> The effective "height" property value from this style.



### Class: CSSPropertyStatus

_Type: string_

The property status: "active" if the property is effective in the style, "inactive" if the property is overridden by a same-named property in this style later on, "disabled" if the property is disabled by the user, "style" (implied if absent) if the property is reported by the browser rather than by the CSS source parser.


### Class: CSSProperty

_Type: object_

CSS style effective visual dimensions and source offsets.

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

_**status ( optional [CSSPropertyStatus](#class-csspropertystatus) )**_<br>
> Whether the property is active or disabled.

_**range ( optional [SourceRange](#class-sourcerange) )**_<br>
> The entire property range in the enclosing style declaration (if available).



### Class: CSSMedia

_Type: object_

CSS media query descriptor.

### Properties

_**text ( string )**_<br>
> Media query text.

_**source ( string enumerated ["mediaRule","importRule","linkedSheet","inlineSheet"] )**_<br>
> Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline stylesheet's STYLE tag.

_**sourceURL ( optional string )**_<br>
> URL of the document containing the media query description.

_**sourceLine ( optional integer )**_<br>
> Line in the document containing the media query (not defined for the "stylesheet" source).



### Class: Region

_Type: object_

This object represents a region that flows from a Named Flow.

### Properties

_**regionOverset ( string enumerated ["overset","fit","empty"] )**_<br>
> The "overset" attribute of a Named Flow.

_**nodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The corresponding DOM node id.



### Class: NamedFlow

_Type: object_

This object represents a Named Flow.

### Properties

_**documentNodeId ( [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> The document node id.

_**name ( string )**_<br>
> Named Flow identifier.

_**overset ( boolean )**_<br>
> The "overset" attribute of a Named Flow.

_**content ( array of [DOM.NodeId](DOM.md#class-nodeid) )**_<br>
> An array of nodes that flow into the Named Flow.

_**regions ( array of [Region](#class-region) )**_<br>
> An array of regions associated with the Named Flow.





