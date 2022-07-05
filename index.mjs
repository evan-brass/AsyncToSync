
async function handler(e) {
	const {responseBuffer, operation, args} = e.data;
	await new Promise(res => setTimeout(res, 1000));
	const i32 = new Int32Array(responseBuffer);
	i32[0] = 1;
	console.log(Atomics.notify(i32, 0));
}

const worker = new Worker('worker.mjs');
worker.onmessage = handler;

const worker2 = new Worker('worker.mjs');
worker.onmessage = handler;

const worker3 = new Worker('worker.mjs');
worker.onmessage = handler;

const worker4 = new Worker('worker.mjs');
worker.onmessage = handler;

