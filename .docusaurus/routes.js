import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '129'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1e8'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4e7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '707'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'bdd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a16'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '5c4'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'd5e'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '258'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '683'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '504'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0d0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'df7'),
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
