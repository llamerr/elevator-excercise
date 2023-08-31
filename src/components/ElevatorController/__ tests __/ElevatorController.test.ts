// import { beforeEach, describe, expect, it, vi } from "vitest";
//
// import { DynamicQueue, TProcessCallback } from "../ElevatorController"; // Update the path accordingly
//
// describe("DynamicQueue", () => {
//   let processCallback: TProcessCallback;
//   let queue: DynamicQueue;
//
//   beforeEach(() => {
//     processCallback = vi.fn(() => Promise.resolve());
//     queue = new DynamicQueue(2, processCallback);
//   });
//
//   it("should process items in the queue", async () => {
//     queue.enqueue("Item 1");
//     queue.enqueue("Item 2");
//     queue.enqueue("Item 3");
//
//     await new Promise((resolve) => setTimeout(resolve, 1500)); // Wait for processing to finish
//
//     expect(processCallback).toHaveBeenCalledTimes(3);
//     expect(processCallback).toHaveBeenCalledWith("Item 1");
//     expect(processCallback).toHaveBeenCalledWith("Item 2");
//     expect(processCallback).toHaveBeenCalledWith("Item 3");
//   });
//
//   it("should handle errors during processing", async () => {
//     processCallback = vi.fn((item: string) =>
//       Promise.reject(new Error(`Error processing ${item}`)),
//     );
//     queue = new DynamicQueue(2, processCallback);
//
//     queue.enqueue("Item 1");
//     queue.enqueue("Item 2");
//
//     await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for processing to finish
//
//     expect(processCallback).toHaveBeenCalledTimes(2);
//     expect(processCallback).toHaveBeenCalledWith("Item 1");
//     expect(processCallback).toHaveBeenCalledWith("Item 2");
//     // You can add more specific error handling assertions here if needed
//   });
//
//   it("should handle concurrent processing", async () => {
//     const processingTimes: number[] = [];
//     processCallback = vi.fn(async () => {
//       const start = Date.now();
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate varying processing times
//       const end = Date.now();
//       processingTimes.push(end - start);
//     });
//     queue = new DynamicQueue(2, processCallback);
//
//     queue.enqueue("Item 1");
//     queue.enqueue("Item 2");
//     queue.enqueue("Item 3");
//     queue.enqueue("Item 4");
//
//     await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for processing to finish
//
//     expect(processingTimes.length).toBe(4);
//     expect(processingTimes[0]).toBeLessThan(1100);
//     expect(processingTimes[1]).toBeLessThan(1100);
//     expect(processingTimes[2]).toBeGreaterThan(900);
//     expect(processingTimes[3]).toBeGreaterThan(900);
//   });
// });
