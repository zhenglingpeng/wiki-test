import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './SupportGrid.module.css';

export default function SupportGrid() {
  const supportLinks = [
    {
      id: 'discord',
      href: 'https://discord.com/invite/6TZb2Y8WKx',
      image: require('@site/static/img/Discord-Logo-White.png').default,
      bg: 'linear-gradient(135deg, #5865F2 0%, #8146FF 100%)',
      titleId: 'support.discord.title',
      titleDefault: '加入开发者社区',
      descriptionId: 'support.discord.description',
      descriptionDefault: '与开发者实时交流技术问题\n获取最新产品动态和教程资源',
    },
    {
      id: 'github',
      href: 'https://github.com/camthink-ai',
      image: require('@site/static/img/GitHub_Lockup_Light.png').default,
      bg: 'linear-gradient(135deg, #24292f 0%, #2b3137 100%)',
      titleId: 'support.github.title',
      titleDefault: 'GitHub 仓库',
      descriptionId: 'support.github.description',
      descriptionDefault: '提交Issue报告问题\n查看源代码和参与贡献',
    },
  ];

  return (
    <div className={styles.gridContainer}>
      {supportLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
          style={{
            background: link.bg,
          }}
        >
          <img
            src={link.image}
            alt={link.titleDefault}
            className={`${styles.cardImage} no-zoom`}
          />
          <h2 className={styles.cardTitle}>
            <Translate
              id={link.titleId}
              description={`Support card title for ${link.id}`}
              values={{ }}
            >
              {link.titleDefault}
            </Translate>
          </h2>
          <p className={styles.cardDescription}>
            <Translate
              id={link.descriptionId}
              description={`Support card description for ${link.id}`}
              values={{ }}
            >
              {link.descriptionDefault}
            </Translate>
          </p>
        </a>
      ))}
    </div>
  );
} 