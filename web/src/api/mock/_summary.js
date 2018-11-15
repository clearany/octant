const Summary = {
  type: 'summary',
  title: 'details',
  sections: [
    {
      title: 'Primary',
      items: [
        {
          type: 'text',
          label: 'Name',
          data: {
            value: 'nginx'
          }
        },
        {
          type: 'text',
          label: 'Namespace',
          data: {
            value: 'default'
          }
        }
      ]
    },
    {
      title: 'Network',
      items: [
        {
          type: 'link',
          label: 'docker-for-desktop',
          data: {
            ref: '/api/node/blah',
            value: 'click-here'
          }
        },
        {
          type: 'text',
          label: 'IP',
          data: {
            value: '10.1.68.108'
          }
        },
        {
          type: 'json',
          label: 'health',
          data: {
            details: {
              cluster: 'Not broken',
              demo: 'Welp'
            },
            lastChecked: 'Yesterday',
            status: 'OK'
          }
        },
        {
          type: 'list',
          label: 'Labels',
          data: {
            list: []
          }
        }
      ]
    }
  ]
}

export default Summary