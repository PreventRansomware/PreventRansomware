import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7d5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd86'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '321'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6ab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '230'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0d0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '686'),
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
        path: '/docs/Lists/BadAttachments',
        component: ComponentCreator('/docs/Lists/BadAttachments', 'dee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Post Compromise/LateralMovement',
        component: ComponentCreator('/docs/Post Compromise/LateralMovement', '66b'),
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
        path: '/docs/Post Compromise/Summary',
        component: ComponentCreator('/docs/Post Compromise/Summary', 'b87'),
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
    component: ComponentCreator('/', '825'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
