const separator = '\n\n      ↓ ↓ ↓ ↓ ↓ ↓\n\n'

module.exports = {
  print(val, serialize) {
    return ['\n', serialize(val.input), separator, serialize(val.output)].join(
      ''
    )
  },

  test(val) {
    return val && val.input && val.output
  }
}
