module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/styles.css");
  return {
    passthroughFileCopy: true,
  };
};
