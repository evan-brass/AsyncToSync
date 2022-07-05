const sab = new SharedArrayBuffer(64);

const i32 = new Int32Array(sab);

const wasm_module = WebAssembly.compile();
const instance = WebAssembly.instantiate(wasm_module, {

});


console.log(i32);

// Request some Async work
postMessage({ responseBuffer: sab });
console.log(Atomics.wait(i32, 0, 0));

// Async work finished.
console.log(i32);