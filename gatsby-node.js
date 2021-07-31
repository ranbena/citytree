exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: '/contact',
    toPath: 'https://citytree.minisite.ms/info',
  });
};
