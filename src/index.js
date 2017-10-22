export default {
    ...console,
    log: (...args) => {
        try {
            console.log(...args.map(arg => typeof arg === 'object' ? JSON.parse(JSON.stringify(arg)) : arg));
        } catch(_) {
            console.log(...args);
        }
    }
};
