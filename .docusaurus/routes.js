
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','cf4'),
  
  routes: [
{
  path: '/docs/Initial Compromise/Explotation Of Networking Appliances',
  component: ComponentCreator('/docs/Initial Compromise/Explotation Of Networking Appliances','2a5'),
  exact: true,
},
{
  path: '/docs/Initial Compromise/Permissive Firewall Rules',
  component: ComponentCreator('/docs/Initial Compromise/Permissive Firewall Rules','6a4'),
  exact: true,
},
{
  path: '/docs/Initial Compromise/Phishing Attacks',
  component: ComponentCreator('/docs/Initial Compromise/Phishing Attacks','541'),
  exact: true,
},
{
  path: '/docs/Initial Compromise/Stolen Credentials',
  component: ComponentCreator('/docs/Initial Compromise/Stolen Credentials','bc0'),
  exact: true,
},
{
  path: '/docs/Initial Compromise/Summary',
  component: ComponentCreator('/docs/Initial Compromise/Summary','57f'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/Lists/Bad eMail File Extensions',
  component: ComponentCreator('/docs/Lists/Bad eMail File Extensions','005'),
  exact: true,
},
{
  path: '/docs/Post Compromise/intro',
  component: ComponentCreator('/docs/Post Compromise/intro','87f'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
