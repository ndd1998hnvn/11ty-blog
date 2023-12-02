const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/styles.css");
  eleventyConfig.addFilter("custom_date", function (date) {
    return DateTime.fromISO(date).toFormat("dd/MM/yyyy");
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      data: "_data",
    },
  };
};
