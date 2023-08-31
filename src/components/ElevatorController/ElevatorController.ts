import without from "lodash/without";

import { TPosition } from "@/components/Elevator/Elevator.types.ts";

export class DynamicQueue {
  queue: TPosition[] = [];

  enqueue(item: TPosition) {
    //if this floor is already in queue, quit
    if (this.queue.find((existing) => existing.floor === item.floor)) return;
    //otherwise add to queue
    this.queue.push(item);
    console.log(`Added to queue '${item.floor}'`);
    console.log(`Queue is: ${this.queue.map((item) => item.floor).toString()}`);
  }

  dequeue(item: TPosition) {
    this.queue = without(this.queue, item);
    console.log(`Removed from queue '${item.floor}'`);
    console.log(`Queue is: ${this.queue.map((item) => item.floor).toString()}`);
  }

  processQueue() {
    return this.queue.find((item) => !item.isProcessed);
  }

  processedNumber() {
    return this.queue.filter((item) => item.isProcessed).length;
  }
}
