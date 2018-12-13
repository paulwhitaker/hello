module.exports = function hello(string) {
  if (typeof string !== "string") throw new TypeError("Need a string")
  return "Hello"
}