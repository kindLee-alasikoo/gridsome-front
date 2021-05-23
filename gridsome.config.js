// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Strapi Gridsome Blog",
  siteDescription: "A blog site made using Gridsome and Strapi",
  plugins: [
    {
      use: "@gridsome/source-graphql",
      options: {
        url:
          
          "http://117.50.38.162:1337/graphql",
        fieldName: "strapi",
        typeName: "strapiTypes",
      },
    },
  ],
};
