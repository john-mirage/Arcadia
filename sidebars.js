// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'requirements',
    {
      type: 'category',
      label: 'Preparation',
      collapsed: true,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Installation image',
          items: [
            {
              type: 'doc',
              id: 'preparation/installation-image/download',
            },
            {
              type: 'doc',
              id: 'preparation/installation-image/verification',
            }
          ]
        },
        {
          type: 'category',
          label: 'Installation medium',
          items: [
            {
              type: 'doc',
              id: 'preparation/installation-medium/preparation',
            },
            {
              type: 'doc',
              id: 'preparation/installation-medium/boot',
            },
          ]
        },
        {
          type: 'category',
          label: 'Live environment',
          items: [
            {
              type: 'doc',
              id: 'preparation/live-environment/keyboard',
            },
            {
              type: 'doc',
              id: 'preparation/live-environment/firmware',
            },
            {
              type: 'doc',
              id: 'preparation/live-environment/network',
            },
            {
              type: 'doc',
              id: 'preparation/live-environment/keyring',
            },
            {
              type: 'doc',
              id: 'preparation/live-environment/mirrorlist',
            },
          ]
        },
        {
          type: 'category',
          label: 'Storage',
          items: [
            {
              type: 'doc',
              id: 'preparation/storage/partitioning',
            },
            {
              type: 'doc',
              id: 'preparation/storage/encryption',
            },
            {
              type: 'doc',
              id: 'preparation/storage/filesystem',
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: true,
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'System',
          items: [
            {
              type: 'doc',
              id: 'installation/system/base',
            },
            {
              type: 'doc',
              id: 'installation/system/storage',
            },
            {
              type: 'doc',
              id: 'installation/system/timezone',
            },
            {
              type: 'doc',
              id: 'installation/system/localization',
            },
            {
              type: 'doc',
              id: 'installation/system/network',
            },
            {
              type: 'doc',
              id: 'installation/system/users-and-groups',
            },
            {
              type: 'doc',
              id: 'installation/system/initialization',
            },
          ]
        },
      ]
    }
  ],
};

module.exports = sidebars;
