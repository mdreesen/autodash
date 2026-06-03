/**
 * AUTODASH GLOBAL SINGLETON EVENT HUB
 * SERVER/UTILS/EVENTHUB.TS
 */

type StreamController = ReadableStreamDefaultController<any>

class CentralEventHub {
  // Use unique symbol keys to completely isolate memory blocks inside globalThis
  private driversKey = Symbol.for('autodash.drivers')
  private buyersKey = Symbol.for('autodash.buyers')

  constructor() {
    if (!(globalThis as any)[this.driversKey]) {
      (globalThis as any)[this.driversKey] = new Map<string, StreamController>()
    }
    if (!(globalThis as any)[this.buyersKey]) {
      (globalThis as any)[this.buyersKey] = new Map<string, StreamController>()
    }
  }

  private get connectedDrivers(): Map<string, StreamController> {
    return (globalThis as any)[this.driversKey]
  }

  private get connectedBuyers(): Map<string, StreamController> {
    return (globalThis as any)[this.buyersKey]
  }

  registerDriver(driverId: string, controller: StreamController) {
    this.connectedDrivers.set(driverId, controller)
    console.log(`📡 [Event Hub] Driver ${driverId} linked up. Universal Connected Total: ${this.connectedDrivers.size}`)
  }

  registerBuyer(orderId: string, controller: StreamController) {
    this.connectedBuyers.set(orderId, controller)
    console.log(`📡 [Event Hub] Buyer tracking order ${orderId}. Universal Connected Total: ${this.connectedBuyers.size}`)
  }

  broadcastToDrivers(eventName: string, data: any) {
    console.log(`🚀 [Event Hub] Pushing '${eventName}' to all ${this.connectedDrivers.size} active driver sockets...`)
    const payload = `event: ${eventName}\ndata: ${JSON.stringify(data)}\n\n`
    
    for (const [driverId, controller] of this.connectedDrivers.entries()) {
      try {
        controller.enqueue(new TextEncoder().encode(payload))
        console.log(`   👉 Successfully streamed packet to Driver ID: ${driverId}`)
      } catch (err) {
        console.warn(`   ❌ Failed streaming to driver ${driverId}, dropping stale connection.`)
        this.connectedDrivers.delete(driverId)
      }
    }
  }

  sendToBuyer(orderId: string, eventName: string, data: any) {
    const controller = this.connectedBuyers.get(orderId)
    if (controller) {
      try {
        const payload = `event: ${eventName}\ndata: ${JSON.stringify(data)}\n\n`
        controller.enqueue(new TextEncoder().encode(payload))
      } catch (err) {
        this.connectedBuyers.delete(orderId)
      }
    }
  }

  unregister(id: string) {
    if (this.connectedDrivers.has(id)) {
      this.connectedDrivers.delete(id)
      console.log(`📡 [Event Hub] Driver detached. Remaining universal connections: ${this.connectedDrivers.size}`)
    }
    if (this.connectedBuyers.has(id)) {
      this.connectedBuyers.delete(id)
      console.log(`📡 [Event Hub] Buyer detached. Remaining universal connections: ${this.connectedBuyers.size}`)
    }
  }
}

// Export a single, universally shared instance across the entire runtime environment
export const EventHub = new CentralEventHub()