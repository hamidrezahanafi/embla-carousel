type EventNameType = keyof DocumentEventMap | keyof WindowEventMap
type EventHandlerType = (evt: any) => void
type EventOptionsType = boolean | AddEventListenerOptions | undefined
type EventRemoverType = () => void

export type EventStoreType = {
  add: (
    node: EventTarget,
    type: EventNameType,
    handler: EventHandlerType,
    options?: EventOptionsType
  ) => EventStoreType
  clear: () => void
}

export function EventStore(): EventStoreType {
  let listeners: EventRemoverType[] = []

  function add(
    node: EventTarget,
    type: EventNameType,
    handler: EventHandlerType,
    options: EventOptionsType = { passive: true }
  ): EventStoreType {
    node.addEventListener(type, handler, options)
    listeners.push(() => node.removeEventListener(type, handler, options))
    return self
  }

  function clear(): void {
    listeners = listeners.filter((remove) => remove())
  }

  const self: EventStoreType = {
    add,
    clear
  }
  return self
}
