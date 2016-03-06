function normalizeFilename(name) {
  return (name[0].toUpperCase() + name.substr(1))
    .match(/([A-Z][^A-Z]*)/g).join('-')
    .replace(/[_\s-]+/g, '-')
    .toLowerCase();
}

module.exports.filename = normalizeFilename