export type TProcessCallback = (item: string) => Promise<void>;
export class DynamicQueue {
  queue: string[] = [];
  concurrentLimit;
  processCallback: TProcessCallback;
  currentlyProcessing = 0;

  constructor(concurrentLimit: number = 2, processCallback: TProcessCallback) {
    this.concurrentLimit = concurrentLimit;
    this.processCallback = processCallback;
  }

  enqueue(item: string) {
    this.queue.push(item);
    this.processQueue();
  }

  async processQueue() {
    if (
      this.currentlyProcessing >= this.concurrentLimit ||
      this.queue.length === 0
    ) {
      return;
    }

    const itemsToProcess = this.queue.splice(
      0,
      this.concurrentLimit - this.currentlyProcessing,
    );
    this.currentlyProcessing += itemsToProcess.length;

    const processPromises = itemsToProcess.map(async (item) => {
      try {
        await this.processCallback(item);
      } catch (error) {
        console.error(`Error processing item ${item}: ${error}`);
      } finally {
        this.currentlyProcessing -= 1;
        this.processQueue();
      }
    });

    await Promise.all(processPromises);
    this.processQueue();
  }
}
