module.exports = {
  permalink: (data) => data.permalink || `${data.page.filePathStem}.html`,
};
