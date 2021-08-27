import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/OpenSource.svg').default,
    description: (
      <>
        Prevent Ransomware is an open source effort to beat ransomware via education. All content is peer reviewed and free forever with no strings attached. 
      </>
    ),
  },
  {
    title: 'Practical',
    Svg: require('../../static/img/Practical.svg').default,
    description: (
      <>
  The documentation here aims to be understandable and free from scaremongering.
  No cyber security expertise is required to implement it. 
      </>
    ),
  },
  {
    title: 'Independent',
    Svg: require('../../static/img/Independent.svg').default,
    description: (
      <>
No sponsorships, advertisements or commercial influence from cyber security vendors.   </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
