// const {graphql} = require("gatsby");
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const AllPostsData = await graphql(`
        query AllPosts {
            allContentfulBlogPost {
                edges {
                  node {
                    author {
                      name
                      id
                    }
                    textContent {
                    textContent
                        childMarkdownRemark {
                            html
                        }
                    }
                    title
                    publicationDate
                    id
                    cover {
                      gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                    tags {
                      id
                      name
                      color
                    }
                  }
                }
              }
        }
    `);
    AllPostsData.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            path: `/posts/${edge.node.title}`,
            component: require.resolve(`./src/templates/post/index.js`),
            context: { ...edge.node },
        })
    })
    const AllTagsData = await graphql(`
        query BrowseByTags {
            allContentfulTag {
                    edges {
                        node {
                            id
                            name
                            color
                        }
                    }
                }
        }
    `);
    AllTagsData.data.allContentfulTag.edges.forEach(edge => {
        createPage({
            path: `/browse/${edge.node.name}`,
            component: require.resolve(`./src/templates/browse/index.js`),
            context: { ...edge.node, param: 'tag' },
        })
    })

    const AllAuthorsData = await graphql(`
        query BrowseByAuthors {
            allContentfulAuthor {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
        }
    `);
    AllAuthorsData.data.allContentfulAuthor.edges.forEach(edge => {
        createPage({
            path: `/author/${edge.node.name}`,
            component: require.resolve(`./src/templates/author/index.js`),
            context: { ...edge.node, param: 'author' },
        })
    })
}