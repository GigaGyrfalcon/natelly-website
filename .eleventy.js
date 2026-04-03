module.exports = function (eleventyConfig) {
  // Static assets — copy as-is to _site/
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/app-ads.txt");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  // Standalone HTML files with inline CSS — copy without template processing
  eleventyConfig.addPassthroughCopy("src/templates-index.html");
  eleventyConfig.addPassthroughCopy("src/theme-profiles.html");
  eleventyConfig.addPassthroughCopy("src/template-01-modern-hospitality.html");
  eleventyConfig.addPassthroughCopy("src/template-02-play-loop.html");
  eleventyConfig.addPassthroughCopy("src/template-03-kind-current.html");
  eleventyConfig.addPassthroughCopy("src/template-04-rally-room.html");

  // Redirect page — copy as-is
  eleventyConfig.addPassthroughCopy("src/projects.html");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
