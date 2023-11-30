module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/styles.css");
  return {
    passthroughFileCopy: true,
    dir: {
      data: "_data",
    },
  };
};
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("custom_date", function (date) {
    return DateTime.fromISO(date).toFormat("dd/MM/yyyy");
  });
};
