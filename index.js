// Helper function to convert a string to camel case
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Helper function to throttle a function (limits how often it can run)
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// Helper function to calculate days between two dates
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    return Math.abs((date2 - date1) / oneDay);
}

// Helper function to generate a range of numbers
function generateRange(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// Helper function to check if an object is empty
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// Example usage
console.log("Camel Case:", toCamelCase("hello world example"));           // "helloWorldExample"

const logMessage = throttle(() => console.log("Throttled Function!"), 2000);
logMessage(); // Try calling this multiple times quickly; it will log only once every 2 seconds

const date1 = new Date("2024-10-01");
const date2 = new Date("2024-10-27");
console.log("Days Between:", daysBetween(date1, date2));                  // 26

console.log("Generated Range:", generateRange(5, 10));                    // [5, 6, 7, 8, 9, 10]

console.log("Is Object Empty?", isEmpty({}));                             // true
console.log("Is Object Empty?", isEmpty({ name: "Alice" }));              // false