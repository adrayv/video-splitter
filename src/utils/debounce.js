export default function(delay, fn) {
  return function(...args) {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
    this.timerId = setTimeout(function() {
      fn(...args);
      this.timerId = null;
    }, delay);
  };
}
