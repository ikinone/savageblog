export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d93dbc6e3c0733ccf6f5f3c',
                  title: 'Sanity Studio',
                  name: 'savageblog-studio',
                  apiId: '007671cf-ab0e-4e1d-b70e-c3198b816c26'
                },
                {
                  buildHookId: '5d93dbc6e3c07398ef6f5f13',
                  title: 'Blog Website',
                  name: 'savageblog',
                  apiId: 'd49a35f5-6e76-4d3e-8b4a-0d8c86ac25a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ikinone/savageblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://savageblog.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
