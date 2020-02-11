export const items = [
  {
    label: 'layout.menu.audience',
    id: 'audience',
    icon: 'users',
    sub_items: [
      {
        label: 'layout.menu.users',
        path: '/audience/users',
      },
      {
        label: 'layout.menu.segmentations',
        path: '/audience/segmentations',
      },
      {
        label: 'layout.menu.fields',
        path: '/audience/fields',
      },
    ],
  },
  {
    label: 'layout.menu.campaigns',
    id: 'campaigns',
    icon: 'text',
    sub_items: [
      {
        label: 'layout.menu.messages',
        path: '/campaigns/messages',
      },
      {
        label: 'layout.menu.automation',
        path: '/campaigns/automation',
      },
    ],
  },
  {
    label: 'layout.menu.analytics',
    id: 'analytics',
    icon: 'graphic',
    sub_items: [
      {
        label: 'layout.menu.automation',
        path: '/analytics/automation',
      },
      {
        label: 'layout.menu.audience',
        path: '/analytics/audience',
      },
      {
        label: 'layout.menu.messages',
        path: '/analytics/messages',
      },
    ],
  },
];
