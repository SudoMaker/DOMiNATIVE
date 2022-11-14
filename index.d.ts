import {
	AbsoluteLayout,
	ActionBar,
	ActionItem,
	ActivityIndicator,
	Button,
	ContentView,
	DatePicker,
	DockLayout,
	EditableTextBase,
	FlexboxLayout,
	FormattedString,
	Frame,
	GridLayout,
	HtmlView,
	Image,
	Label,
	LayoutBase,
	ListPicker,
	ListView,
	NavigationButton,
	Page,
	Placeholder,
	Progress,
	ProxyViewContainer,
	RootLayout,
	ScrollView,
	SearchBar,
	SegmentedBar,
	SegmentedBarItem,
	Slider,
	Span,
	StackLayout,
	Style,
	Switch,
	TabView,
	TabViewItem,
	TextBase,
	TextField,
	TextView,
	TimePicker,
	ViewBase,
	WebView,
	WrapLayout,
} from "@nativescript/core";

declare module "dominative" {
	export interface NSCustomComponentsMap {}

	interface NSTypeofComponents {
		Frame: Frame & typeof Frame;
		Page: Page & typeof Page;
		Prop: Prop & typeof Prop;
		ItemTemplate: ItemTemplate & typeof ItemTemplate;
		AbsoluteLayout: AbsoluteLayout & typeof AbsoluteLayout;
		ActionBar: ActionBar & typeof ActionBar;
		ActionItem: ActionItem & typeof ActionItem;
		ActivityIndicator: ActivityIndicator & typeof ActivityIndicator;
		Button: Button & typeof Button;
		ContentView: ContentView & typeof ContentView;
		DatePicker: DatePicker & typeof DatePicker;
		DockLayout: DockLayout & typeof DockLayout;
		FlexboxLayout: FlexboxLayout & typeof FlexboxLayout;
		FormattedString: FormattedString & typeof FormattedString;
		GridLayout: GridLayout & typeof GridLayout;
		HtmlView: HtmlView & typeof HtmlView;
		Image: Image & typeof Image;
		Label: Label & typeof Label;
		ListPicker: ListPicker & typeof ListPicker;
		ListView: ListView & typeof ListView;
		NavigationButton: NavigationButton & typeof NavigationButton;
		Placeholder: Placeholder & typeof Placeholder;
		Progress: Progress & typeof Progress;
		ProxyViewContainer: ProxyViewContainer & typeof ProxyViewContainer;
		RootLayout: RootLayout & typeof RootLayout;
		ScrollView: ScrollView & typeof ScrollView;
		SearchBar: SearchBar & typeof SearchBar;
		SegmentedBar: SegmentedBar & typeof SegmentedBar;
		SegmentedBarItem: SegmentedBarItem & typeof SegmentedBarItem;
		Slider: Slider & typeof Slider;
		Span: Span & typeof Span;
		StackLayout: StackLayout & typeof StackLayout;
		Switch: Switch & typeof Switch;
		TabView: TabView & typeof TabView;
		TabViewItem: TabViewItem & typeof TabViewItem;
		TextField: TextField & typeof TextField;
		TextView: TextView & typeof TextView;
		TimePicker: TimePicker & typeof TimePicker;
		WebView: WebView & typeof WebView;
		WrapLayout: WrapLayout & typeof WrapLayout;
	}

	export const NSComponentsWithTypeOfMap: NSTypeofComponents;

	interface NSComponentsMap {
		Frame: Frame;
		Page: Page;
		Prop: Prop;
		ItemTemplate: ItemTemplate;
		AbsoluteLayout: AbsoluteLayout;
		ActionBar: ActionBar;
		ActionItem: ActionItem;
		ActivityIndicator: ActivityIndicator;
		Button: Button;
		ContentView: ContentView;
		DatePicker: DatePicker;
		DockLayout: DockLayout;
		FlexboxLayout: FlexboxLayout;
		FormattedString: FormattedString;
		GridLayout: GridLayout;
		HtmlView: HtmlView;
		Image: Image;
		Label: Label;
		ListPicker: ListPicker;
		ListView: ListView;
		NavigationButton: NavigationButton;
		Placeholder: Placeholder;
		Progress: Progress;
		ProxyViewContainer: ProxyViewContainer;
		RootLayout: RootLayout;
		ScrollView: ScrollView;
		SearchBar: SearchBar;
		SegmentedBar: SegmentedBar;
		SegmentedBarItem: SegmentedBarItem;
		Slider: Slider;
		Span: Span;
		StackLayout: StackLayout;
		Switch: Switch;
		TabView: TabView;
		TabViewItem: TabViewItem;
		TextField: TextField;
		TextView: TextView;
		TimePicker: TimePicker;
		WebView: WebView;
		WrapLayout: WrapLayout;
	}

	export type ExtractEventNamesWithDefault<T> =
		| {
				[K in keyof T]: K extends `${infer Name}Event` ? Name : never;
		  }[keyof T]
		| ({} & string);

	export type ExtractEventNames<T> = {
		[K in keyof T]: K extends `${infer Name}Event` ? Name : never;
	}[keyof T];

	interface ElementCreationOptions {
		is?: string;
	}

	interface EventListener<T = HTMLViewBaseElement> {
		(event: Event<T>): void;
	}

	interface EventListenerObject<T = HTMLViewBaseElement> {
		handleEvent(event: Event<T>): void;
	}

	type EventListenerOrEventListenerObject<T = HTMLViewBaseElement> =
		| EventListener<T>
		| EventListenerObject<T>;

	interface AddEventListenerOptions extends EventListenerOptions {
		once?: boolean;
		passive?: boolean;
		//signal?: AbortSignal;
	}

	interface EventListenerOptions {
		capture?: boolean;
	}

	type DOMHighResTimeStamp = number;

	export interface EventOption {
		bubbles?: boolean;
		captures?: boolean;
		cancelable?: boolean;
	}

	export interface Event<T = HTMLViewBaseElement> {
		/** Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise. */
		readonly bubbles: boolean;
		/** Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method. */
		readonly cancelable: boolean;
		/** Returns the object who triggeres the event. */
		readonly target: (EventTarget<T> & T) | null;
		/** Returns the object whose event listener's callback is currently being invoked. */
		readonly currentTarget: (EventTarget<T> & T) | null;

		readonly object: (EventTarget<T> & T) | null;
		/** Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise. */
		readonly defaultPrevented: boolean;
		/** Returns the type of event, e.g. "click", "hashchange", or "submit". */
		readonly type: string;
		initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
		/** If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled. */
		preventDefault(): void;
		/** Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects. */
		stopImmediatePropagation(): void;
		/** When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object. */
		stopPropagation(): void;
	}

	export interface DOMEvent<T> extends Event<T> {}

	export type ExtendWithCustomEventHandlers<T, C> = {
		eventNames: ExtractEventNames<T>
		on(
			eventNames: ExtractEventNames<T>,
			callback: (event: EventListenerOrEventListenerObject<C>) => void,
			thisArg?: any
		): void;
		off(
			event: ExtractEventNames<T>,
			callback: (event: EventListenerOrEventListenerObject<C>) => void,
			thisArg?: any
		): void;
		addEventListener(
			type: ExtractEventNames<T>,
			callback: EventListenerOrEventListenerObject<C>,
			options?: boolean | AddEventListenerOptions
		): void;
		removeEventListener(
			type: ExtractEventNames<T>,
			callback: EventListenerOrEventListenerObject<C>,
			options?: boolean | EventListenerOptions
		): void;
	} & C;

	type HTMLViewBaseElement = ExtendWithCustomEventHandlers<
		typeof ViewBase,
		HTMLElement<ViewBase>
	>;

	export class Node extends ViewBase {
		constructor(nodeType: number, nodeName: string);
		readonly nodeType: number;
		readonly nodeName: string;
		readonly tagName: string;
		parentNode: ParentNode;
		get nextSibling(): Node;
		get previousSibling(): Node;

		get firstChild(): Node;
		get lastChild(): Node;

		hasChildNodes(): boolean;
		replaceWith(...nodes: Node[]): void;
		cloneNode(deep: boolean): Node;
		remove(): void;
	}

	export interface EventTarget<T = HTMLViewBaseElement> {
		/**
		 * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
		 *
		 * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
		 *
		 * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
		 *
		 * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
		 *
		 * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
		 *
		 * If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.
		 *
		 * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
		 */
		addEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject<T> | null,
			options?: AddEventListenerOptions | boolean
		): void;
		/** Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise. */
		dispatchEvent(event: Event): boolean;
		/** Removes the event listener in target's event listener list with the same type, callback, and options. */
		removeEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject<T> | null,
			options?: EventListenerOptions | boolean
		): void;
	}

	export class Element extends ParentNode implements EventTarget {
		attributes: { namespace: string; name: string }[];
		style: Style;
		localName: string;
		//@ts-ignore
		get className(): string;

		set className(val: string);

		get cssText(): string;
		set cssText(val: string);
		//@ts-ignore
		get children(): Element[];

		namespaceURI(): string;

		get innerHTML(): string;

		set innerHTML(value: string);

		get outerHTML(): string;

		set outerHTML(value: string);

		get textContent(): string;

		set textContent(value: string);

		insertBefore(child: Node, ref: Node): Node;

		setAttribute(qualifiedName: string, value: string): void;
		getAttribute(qualifiedName: string): string | null;

		removeAttribute(qualifiedName: string): void;
		/** Removes element's attribute whose namespace is namespace and local name is localName. */
		removeAttributeNS(namespace: string | null, localName: string): void;

		setAttributeNS(
			namespace: string | null,
			qualifiedName: string,
			value: string
		): void;
		/** Returns element's attribute whose namespace is namespace and local name is localName, and null if there is no such attribute otherwise. */
		getAttributeNS(namespace: string | null, localName: string): string | null;
		//@ts-ignore
		addEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject,
			options?: boolean | AddEventListenerOptions
		): void;
		dispatchEvent(event: Event): boolean;
		removeEventListener(
			type: string,
			callback: EventListenerOrEventListenerObject,
			options?: boolean | EventListenerOptions
		): void;
	}

	export interface CharacterData extends Node {
		get data(): string;
		set data(data: string);

		get length(): number;

		get nodeValue(): string;
		set nodeValue(data: string);

		get textContent(): string;
		set textContent(value: string);

		appendData(data: string);
	}

	export interface Comment extends CharacterData {
		constructor(data: string): void;
	}

	//@ts-ignore
	export interface Text extends Node {
		constructor(text: string);
		set textContent(value: string);
		get textContent(): string;
	}

	export class ParentNode extends Node {
		childElementCount: number;
		get firstElementChild(): Node;
		get lastElementChild(): Node;
		get children(): Node[];
		get childNodes(): Node;
		append(...nodes: Node[]): void;
		insertBefore(child: Node, ref: Node): Node;
		replaceChild(child: Node, ref: Node): Node;
		appendChild(child: Node): Node;
		get textContent(): string;
		set textContent(value: string);
		removeChild(child: Node): Node;
	}

	export interface Scope {
		Event: Event;
		Node: Node;
		ParentNode: ParentNode;
		HTMLElement: HTMLElement;
		SVGElement: SVGElement;
		DocumentFragment: DocumentFragment;
		Comment: Comment;
		CharacterData: CharacterData;
		Text: Text;
		Element: Element;
		Document: Document;
	}

	export class DocumentFragment extends ParentNode {}

	export class SVGElement extends Element {}

	class HTMLElementBase extends Element {
		style: Style;
	}

	export type HTMLElement<T = any> = Omit<HTMLElementBase & T, "on" | "off">;

	export type DominativeExtended<T = ViewBase> = T & {};

	class TweakableBase {
		static getEventMap(fromEvent: string): string;
		static getEventOption(type: string): EventOption | void;
		static mapEvent(fromEvent: string, toEvent: string): void;
		static mapProp(fromProp: string, toProp: string): void;
		static defineEventOption(type: string, option: EventOption): void;
	}

	export type Tweakable<T> = TweakableBase & T;

	export class Prop extends HTMLElementBase {
		constructor(key: string, type: string);
		get key(): string;
		set key(key: string);
		get class(): string;
		set class(value: string);
		get type(): string;
		set type(type: string);
		get value(): any;
		set value(value: any);
		//@ts-ignore
		get parent(): ParentNode;
	}

	export class ItemTemplate extends Prop {
		get content(): any;
		set content(value: any);
		patch(data: {
			view: HTMLElement;
			index: number;
			item: any;
			data: any;
		}): HTMLElement;
		createView(): HTMLElement;
	}

	class DocumentBase extends ParentNode {
		createElement<K extends keyof HTMLElementTagNameMap | (string & {})>(
			tagName: K
		): //options?: ElementCreationOptions
		//@ts-ignore
		HTMLElementTagNameMap[K];
		createElementNS<K extends keyof HTMLElementTagNameMap | (string & {})>(
			namespace: string | null,
			qualifiedName: K
		): //options?: ElementCreationOptions
		Element;
		createTextNode(text: string): Text;
		createDocumentFragment(): DocumentFragment;
		createEvent(type: string): Event;
		createComment(data: string): Comment;
		get defaultView(): Scope;
	}

	type DominativeExtendedMap = {
		[K in keyof NSComponentsMap]: DominativeExtended<NSComponentsMap[K]>;
	};

	type TweakableMap = {
		[K in keyof NSComponentsMap]: Tweakable<DominativeExtendedMap[K]>;
	};

	type HTMLElementTagNameMap = {
		[K in keyof NSComponentsMap]: ExtendWithCustomEventHandlers<
			typeof NSComponentsWithTypeOfMap[K],
			HTMLElement<TweakableMap[K]>
		>;
	} & {
		[K in keyof NSCustomComponentsMap]: HTMLElement<Tweakable<DominativeExtended<NSCustomComponentsMap[K]>>>
	}

	export type Document = DocumentBase & Tweakable<DominativeExtended<ContentView>> & {
		documentElement: HTMLElementTagNameMap["Frame"];
		body: HTMLElementTagNameMap["Page"];
	}

	export const document: Document;
	export const scope: Scope;
	/**
	 * Creates alias for tag names
	 * Useful when frameworks doesn't support case sensitive tag names
	 *
	 * @param      {string}  nameHandler  The name converter
	 */
	export function aliasTagName(nameHandler: (tag: string) => string): void;
	export const domImpl: {
		Node: Node;
		document: Document;
		isNode(node: any): boolean;
	};
	/**
	 * Creates a document
	 *
	 * @param      {Document}  initDocument  Method to initialize the document
	 */
	export function createDocument(initDocument?: (document: Document) => void): Document;
	/**
	 * Register a NativeScript view to be a DOM element
	 *
	 * @param      {string}  name     The name of the element
	 * @param      {T}       element  The view to be registered
	 */
	export function registerElement<T = ViewBase>(
		name: string,
		element: T
	): HTMLElement<Tweakable<DominativeExtended<T>>>;
	/**
	 * Register anything as a DOM element
	 *
	 * @param      {string}   name     The name of the element
	 * @param      {T}        element  The element to be rsgistered
	 * @param      {boolean}  isSvg    Indicates if the element is svg
	 */
	export function registerDOMElement<T = any>(
		name: string,
		element?: T,
		isSvg?: boolean
	): HTMLElement<T>;
	/**
	 * Register all built-in elements automatically
	 * **Harmful to tree-shaking**
	 */
	export function registerAllElements(): void;
	/**
	 * Automatically register `document`, `window` and related variables globally
	 *
	 * @param      {any}  global  The global
	 */
	export function globalRegister(global: any): void;

	export function makeTweakable<T = Object>(obj: T, options: any): Tweakable<T>;
	export function makeView<T = ViewBase>(view: T, options: any): DominativeExtended<T>;
	export function makeLayout<T = LayoutBase>(view: T, options: any): DominativeExtended<T>;
	export function makeText<T = TextBase>(view: T, options: any): DominativeExtended<T>;
	export function makeEditableText<T = EditableTextBase>(view: T, options: any): DominativeExtended<T>;
	export function makeAbsoluteLayout<T = AbsoluteLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeActionBar<T = ActionBar>(view: T, options: any): DominativeExtended<T>;
	export function makeActionItem<T = ActionItem>(view: T, options: any): DominativeExtended<T>;
	export function makeActivityIndicator<T = ActivityIndicator>(view: T, options: any): DominativeExtended<T>;
	export function makeButton<T = Button>(view: T, options: any): DominativeExtended<T>;
	export function makeContentView<T = ContentView>(view: T, options: any): DominativeExtended<T>;
	export function makeDatePicker<T = DatePicker>(view: T, options: any): DominativeExtended<T>;
	export function makeDockLayout<T = DockLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeFlexboxLayout<T = FlexboxLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeFormattedString<T = FormattedString>(view: T, options: any): DominativeExtended<T>;
	export function makeFrame<T = Frame>(view: T, options: any): DominativeExtended<T>;
	export function makeGridLayout<T = GridLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeHtmlView<T = HtmlView>(view: T, options: any): DominativeExtended<T>;
	export function makeImage<T = Image>(view: T, options: any): DominativeExtended<T>;
	export function makeLabel<T = Label>(view: T, options: any): DominativeExtended<T>;
	export function makeListPicker<T = ListPicker>(view: T, options: any): DominativeExtended<T>;
	export function makeListView<T = ListView>(view: T, options: any): DominativeExtended<T>;
	export function makeNavigationButton<T = NavigationButton>(view: T, options: any): DominativeExtended<T>;
	export function makePage<T = Page>(view: T, options: any): DominativeExtended<T>;
	export function makePlaceholder<T = Placeholder>(view: T, options: any): DominativeExtended<T>;
	export function makeProgress<T = Progress>(view: T, options: any): DominativeExtended<T>;
	export function makeProxyViewContainer<T = ProxyViewContainer>(view: T, options: any): DominativeExtended<T>;
	export function makeRootLayout<T = RootLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeScrollView<T = ScrollView>(view: T, options: any): DominativeExtended<T>;
	export function makeSearchBar<T = SearchBar>(view: T, options: any): DominativeExtended<T>;
	export function makeSegmentedBar<T = SegmentedBar>(view: T, options: any): DominativeExtended<T>;
	export function makeSegmentedBarItem<T = SegmentedBarItem>(view: T, options: any): DominativeExtended<T>;
	export function makeSlider<T = Slider>(view: T, options: any): DominativeExtended<T>;
	export function makeSpan<T = Span>(view: T, options: any): DominativeExtended<T>;
	export function makeStackLayout<T = StackLayout>(view: T, options: any): DominativeExtended<T>;
	export function makeSwitch<T = Switch>(view: T, options: any): DominativeExtended<T>;
	export function makeTabView<T = TabView>(view: T, options: any): DominativeExtended<T>;
	export function makeTemplateReceiver<T = ViewBase>(view: T, options: any): DominativeExtended<T>;
	export function makeTextField<T = TextField>(view: T, options: any): DominativeExtended<T>;
	export function makeTextView<T = TextView>(view: T, options: any): DominativeExtended<T>;
	export function makeTimePicker<T = TimePicker>(view: T, options: any): DominativeExtended<T>;
	export function makeWebView<T = WebView>(view: T, options: any): DominativeExtended<T>;
	export function makeWrapLayout<T = WrapLayout>(view: T, options: any): DominativeExtended<T>;

	export const AbsoluteLayout: DominativeExtendedMap['AbsoluteLayout'];
	export const ActionBar: DominativeExtendedMap['ActionBar'];
	export const ActionItem: DominativeExtendedMap['ActionItem'];
	export const ActivityIndicator: DominativeExtendedMap['ActivityIndicator'];
	export const Button: DominativeExtendedMap['Button'];
	export const ContentView: DominativeExtendedMap['ContentView'];
	export const DatePicker: DominativeExtendedMap['DatePicker'];
	export const DockLayout: DominativeExtendedMap['DockLayout'];
	export const FlexboxLayout: DominativeExtendedMap['FlexboxLayout'];
	export const FormattedString: DominativeExtendedMap['FormattedString'];
	export const Frame: DominativeExtendedMap['Frame'];
	export const GridLayout: DominativeExtendedMap['GridLayout'];
	export const HtmlView: DominativeExtendedMap['HtmlView'];
	export const Image: DominativeExtendedMap['Image'];
	export const Label: DominativeExtendedMap['Label'];
	export const ListPicker: DominativeExtendedMap['ListPicker'];
	export const ListView: DominativeExtendedMap['ListView'];
	export const NavigationButton: DominativeExtendedMap['NavigationButton'];
	export const Page: DominativeExtendedMap['Page'];
	export const Placeholder: DominativeExtendedMap['Placeholder'];
	export const Progress: DominativeExtendedMap['Progress'];
	export const ProxyViewContainer: DominativeExtendedMap['ProxyViewContainer'];
	export const RootLayout: DominativeExtendedMap['RootLayout'];
	export const ScrollView: DominativeExtendedMap['ScrollView'];
	export const SearchBar: DominativeExtendedMap['SearchBar'];
	export const SegmentedBar: DominativeExtendedMap['SegmentedBar'];
	export const SegmentedBarItem: DominativeExtendedMap['SegmentedBarItem'];
	export const Slider: DominativeExtendedMap['Slider'];
	export const Span: DominativeExtendedMap['Span'];
	export const StackLayout: DominativeExtendedMap['StackLayout'];
	export const Switch: DominativeExtendedMap['Switch'];
	export const TabView: DominativeExtendedMap['TabView'];
	export const TextField: DominativeExtendedMap['TextField'];
	export const TextView: DominativeExtendedMap['TextView'];
	export const TimePicker: DominativeExtendedMap['TimePicker'];
	export const WebView: DominativeExtendedMap['WebView'];
	export const WrapLayout: DominativeExtendedMap['WrapLayout'];
}
