module.exports = [{
  title: 'Learning',
  collapsable: false,
  sidebarDepth: 2,
  children: [
    '/learning/',
    {
      title: 'Terminology',
      collapsable: true,
      path: '/learning/tutorial/terminology',
      sidebarDepth: 2,
      children: [
        '/learning/tutorial/terminology'
      ]
    },
    {
      title: 'Tutorial',
      collapsable: true,
      path: '/learning/tutorial',
      sidebarDepth: 0,
      children: [
        '/learning/tutorial/creatingnodes',
        '/learning/tutorial/commands',
        '/learning/tutorial/jobs'
      ]
    },
    {
      title: 'How To',
      collapsable: true,
      path: '/learning/howto',
      sidebarDepth: 0,
      children: [
        {
          title: 'Customizing',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            '/learning/howto/custom-script-plugin-hello-world',
            '/learning/howto/java-plugin'
          ]
        }
      ]
    },
  ]
}]