import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '350'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '267'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '806'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'eef'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'df1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '3e4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b41'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '982'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f09'),
    routes: [
      {
        path: '/docs/Initial Compromise/Explotation Of Networking Appliances',
        component: ComponentCreator('/docs/Initial Compromise/Explotation Of Networking Appliances', '437'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Initial Compromise/Permissive Firewall Rules',
        component: ComponentCreator('/docs/Initial Compromise/Permissive Firewall Rules', 'b54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Initial Compromise/Phishing Attacks',
        component: ComponentCreator('/docs/Initial Compromise/Phishing Attacks', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Initial Compromise/Stolen Credentials',
        component: ComponentCreator('/docs/Initial Compromise/Stolen Credentials', '485'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Initial Compromise/Summary',
        component: ComponentCreator('/docs/Initial Compromise/Summary', '030'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Lists/Bad eMail File Extensions',
        component: ComponentCreator('/docs/Lists/Bad eMail File Extensions', 'f18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Post Compromise/Foreword',
        component: ComponentCreator('/docs/Post Compromise/Foreword', '802'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Post Compromise/persistance',
        component: ComponentCreator('/docs/Post Compromise/persistance', '8be'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Post Compromise/Privilege Escalation',
        component: ComponentCreator('/docs/Post Compromise/Privilege Escalation', '94c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Vendor Specific/introduction',
        component: ComponentCreator('/docs/Vendor Specific/introduction', 'e1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '656'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
