// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  api.createPages(async ({ graphql, createPage }) => {
    const {data}  = await graphql(`
      {
        strapi{
          allJournalPosts{
            id
            title
            Author
            Date
            Time
            content
          }
          articles: allProjectPosts{
           id
           title
           date
           thumbnail{
             url
           }
           categories{
             name
           }
           content
         }
      }
    }
    `);
    
    // Create blog articles pages.  const articles = data.strapi.projects;
    // const categories = data.strapi.categories;
    try{
      console.log(data)
      data.strapi.articles.forEach((article) => {
      createPage({
        path: `/project/${article.id}`,
        component: "./src/templates/ProjectPost.vue",
        context: {
          allData: article,
        },
      });
    });
    data.strapi.allJournalPosts.forEach((article) => {
      createPage({
        path: `/journal/${article.id}`,
        component: "./src/templates/JournalPost.vue",
        context: {
          allData: article,
        },
      });
    });
  }

    catch(err){
    console.log(err)
    }
  });
};
