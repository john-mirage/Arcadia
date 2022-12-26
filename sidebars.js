// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guide: [
    'about',
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
            'preparation/installation-image/download',
            'preparation/installation-image/verification'
          ]
        },
        {
          type: 'category',
          label: 'Installation medium',
          items: [
            'preparation/installation-medium/preparation',
            'preparation/installation-medium/boot',
          ]
        },
        {
          type: 'category',
          label: 'Live environment',
          items: [
            'preparation/live-environment/keyboard',
            'preparation/live-environment/firmware',
            'preparation/live-environment/network',
            'preparation/live-environment/keyring',
            'preparation/live-environment/mirrorlist',
          ]
        },
        {
          type: 'category',
          label: 'Storage',
          items: [
            'preparation/storage/partitioning',
            'preparation/storage/encryption',
            'preparation/storage/filesystem',
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
            'installation/system/base',
            'installation/system/storage',
            'installation/system/timezone',
            'installation/system/localization',
            'installation/system/network',
            'installation/system/users-and-groups',
            'installation/system/initialization',
          ]
        },
        {
          type: 'category',
          label: 'Display',
          items: [
            'installation/display/driver',
            'installation/display/server',
          ]
        },
        {
          type: 'category',
          label: 'Desktop',
          items: [
            'installation/desktop/toolkit',
            'installation/desktop/window-manager',
          ]
        },
      ]
    }
  ],
};

module.exports = sidebars;
