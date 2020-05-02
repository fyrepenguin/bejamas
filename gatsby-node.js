const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const careerTemplate = path.resolve(`src/templates/career.js`);
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            body
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

  result.data.allMdx.edges.forEach(({ node }) => {
    const path = `careers${node.frontmatter.path}`;
    createPage({
      path,
      component: careerTemplate,
      context: { pathSlug: path, id: node.id },
    });
  });
};
