const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const careerTemplate = path.resolve(`src/templates/career.js`);
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
            id
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.error(result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = `careers${node.frontmatter.path}`;
    createPage({
      path,
      component: careerTemplate,
      context: { pathSlug: path, id: node.id },
    });
  });
};
