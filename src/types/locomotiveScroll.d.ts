import ReactLocomotiveScroll from 'react-locomotive-scroll'

declare module 'react-locomotive-scroll' {
  type Vector2 = {
    x: number
    y: number
  }

  interface LocomotiveScrollOptions {
    class?: string
    direction?: string
    draggingClass?: string
    el?: Element
    elMobile?: Element
    getDirection?: boolean
    getSpeed?: boolean
    inertia?: number
    initClass?: string
    name?: string
    offset?: number
    repeat?: boolean
    scrollbarClass?: string
    scrollingClass?: string
    smooth?: boolean
    smoothClass?: string
    smoothMobile?: boolean
  }

  // function getParents(elem: Element): Element[]
  // function queryClosestParent(elem: Element, selector: string): Element | null
  // function transform(el: Element, transformValue: string): void
  // function getTranslate(el: Element): Vector2
  // function lerp(start: number, end: number, amt: number)

  type LocomotiveElementAttributes = {
    bottom: number
    call: string
    class: string
    el: HTMLElement
    inView: boolean
    offset: number
    repeat: boolean
    top: number
  }

  type ScrollInstance = {
    limit: number
    scroll: Vector2
  }

  class Core implements LocomotiveScrollOptions {
    class?: string

    direction?: string

    draggingClass?: string

    el?: Element

    elMobile?: Element

    els: Element[]

    getDirection?: boolean

    getSpeed?: boolean

    hasCallEventSet: boolean

    hasScrollTicking: boolean

    html: Element

    inertia?: number

    initClass?: string

    instance: ScrollInstance

    name?: string

    namespace: string

    offset?: number

    repeat?: boolean

    scrollbarClass?: string

    scrollingClass?: string

    smooth?: boolean

    smoothClass?: string

    smoothMobile?: boolean

    windowHeight: number

    windowMiddle: number

    constructor(options?: LocomotiveScrollOptions)

    addElements(): void

    checkResize(): void

    checkScroll(): void

    destroy(): void

    detectElements(hasCallEventSet: boolean): void

    dispatchCall(current: LocomotiveElementAttributes, way: string): void

    dispatchScroll(): void

    init(): void

    initEvents(): void

    setEvents(event: string, func: string | string[]): void

    setInView(current: LocomotiveElementAttributes, i: number): void

    setOutOfView(current: LocomotiveElementAttributes, i: number): void

    setScroll(x: number, y: number): void

    setScrollTo(event: Event): void

    startScroll(): void

    stopScroll(): void
  }

  class Native extends Core {
    constructor(options?: LocomotiveScrollOptions)

    addElements(): void

    checkResize(): void

    checkScroll(): void

    destroy(): void

    init(): void

    scrollTo(targetOption: Event | string, offsetOption: number): void

    update(): void

    updateElements(): void
  }

  class Smooth extends Core {
    inertiaRatio: number

    isDraggingScrollbar: boolean

    isScrolling: boolean

    isTicking: boolean

    parallaxElements: Element[]

    stop: boolean

    constructor(options?: LocomotiveScrollOptions)

    addDirection(): void

    addElements(): void

    addSections(): void

    addSpeed(): void

    checkKey(e: KeyboardEvent): void

    checkResize(): void

    checkScroll(): void

    destroy(): void

    destroyScrollBar(): void

    getScrollBar(e: Event): void

    init(): void

    initScrollBar(): void

    moveScrollBar(e: MouseEvent): void

    reinitScrollBar(): void

    releaseScrollBar(e: Event): void

    scrollTo(targetOption: Event | string, offsetOption: number): void

    setScroll(x: number, y: number): void

    setScrollLimit(): void

    startScroll(): void

    startScrolling(): void

    stopScroll(): void

    stopScrolling(): void

    transform(element: Element, x: number, y: number, delay: number): void

    transformElement(isForced: boolean): void

    update(): void

    updateDelta(e: WheelEvent): void

    updateScroll(e: Event): void
  }

  export interface LocomotiveScrollEvent {
    delta: { x: number; y: number }
    limit: { x: number; y: number }
    scroll: { x: number; y: number }
    speed: number
  }

  export class Scroll implements LocomotiveScrollOptions {
    class?: string

    direction?: string

    draggingClass?: string

    el?: Element

    elMobile?: Element

    getDirection?: boolean

    getSpeed?: boolean

    inertia?: number

    initClass?: string

    isMobile: boolean

    name?: string

    offset?: number

    options: LocomotiveScrollOptions

    repeat?: boolean

    scroll: Native | Smooth

    scrollbarClass?: string

    scrollingClass?: string

    smooth?: boolean

    smoothClass?: string

    smoothMobile?: boolean

    constructor(options?: LocomotiveScrollOptions)

    destroy(): void

    init(): void

    off(event: 'call' | 'scroll', func: (e: LocomotiveScrollEvent) => void): void

    on(event: 'call' | 'scroll', func: (e: LocomotiveScrollEvent) => void): void

    scrollTo(
      target: Node | number | string,
      options: {
        callback?: () => void
        disableLerp?: boolean
        duration?: number
        easing?: [number, number, number, number]
        offset?: number
      }
    ): void

    setScroll(x: number, y: number): void

    start(): void

    stop(): void

    update(): void
  }

  export default ReactLocomotiveScroll
}
