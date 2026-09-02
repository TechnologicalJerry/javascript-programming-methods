/** ArrayBuffer owns raw bytes. Resizable APIs require Node 24+ (this project does). */
export function runArrayBuffer() {
 console.log("\n=== ARRAYBUFFER METHODS ==="); let buffer=new ArrayBuffer(8,{maxByteLength:16});
 // byteLength/maxByteLength/resizable/detached describe buffer state; inspect binary storage.
 console.log("properties",buffer.byteLength,buffer.maxByteLength,buffer.resizable,buffer.detached);
 // slice(begin,end) returns a copied ArrayBuffer; copy packet bytes.
 console.log("slice",buffer.slice(0,4).byteLength);
 // resize(newLength) MUTATES resizable buffer; returns undefined; grow a receive buffer.
 buffer.resize(12); console.log("resize",buffer.byteLength);
 // transfer() returns a new resizable buffer and detaches original; hand ownership to worker.
 const moved=buffer.transfer(10); console.log("transfer",moved.byteLength,buffer.detached);
 // transferToFixedLength() returns non-resizable buffer and detaches source; finalize outgoing bytes.
 const fixed=moved.transferToFixedLength(); console.log("fixed",fixed.byteLength,fixed.resizable,ArrayBuffer.isView(new Uint8Array(fixed)));
}
