import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaData, MetaDataMapping } from '../models/seo';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private document = inject<Document>(DOCUMENT);
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {}

  updateMetaData(url: string) {
    // Get the meta data for the current URL
    const metaData = this.getMetaData(url);
    this.title.setTitle(metaData.title);
    this.meta.updateTag({ name: 'description', content: metaData.description });
    this.meta.updateTag({ name: 'author', content: metaData.author });
    this.meta.updateTag({ name: 'keywords', content: metaData.keywords });
    this.meta.updateTag({ property: 'og:image', content: metaData.image });
    this.meta.updateTag({ name: 'twitter:image', content: metaData.image });

    // For canonical url, remove existing canonical tag first.
    const existingCanonical = this.document.querySelector(
      'link[rel="canonical"]',
    );
    if (existingCanonical) {
      this.document.head.removeChild(existingCanonical);
    }

    // Then, add the new canonical tag
    const link: HTMLLinkElement = this.document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', metaData.canonical);
    this.document.head.appendChild(link);
  }

  getMetaData(url: string): MetaData {
    // Check if URL is an experience page
    if (url.includes('/desktop/experience/')) {
      const experienceName = url.split('/').pop() || '';
      const formattedName = experienceName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return {
        title: `${formattedName} | Ahmed Tabib Portfolio`,
        description: `View details about ${formattedName} experience - Ahmed Tabib's portfolio showcasing skills and projects as a Fullstack JavaScript Developer.`,
        author: 'Ahmed Tabib',
        keywords: `Ahmed Tabib, ${formattedName}, portfolio, experience, JavaScript, Angular, React, Node`,
        image: 'https://www.ahmedtabib.com/me.webp',
        canonical: `https://www.ahmedtabib.com${url}`,
      };
    }

    // Example mapping of URLs to meta data
    const metaDataMapping: MetaDataMapping = {
      '/desktop': {
        title: 'Ahmed Tabib | Fullstack Developer JavaScript',
        description:
          'Ahmed Tabib - A skilled Fullstack JavaScript Developer, experienced with Angular, React, Node, Express, Jest, Karma, AWS, and more.',
        author: 'Ahmed Tabib',
        keywords:
          'Ahmed Tabib, full stack developer, JavaScript, Angular, React, Node, Express, Jest, Karma, AWS',
        image: 'https://www.ahmedtabib.com/me.webp',
        canonical: 'https://www.ahmedtabib.com/desktop',
      },
      '/boot': {
        title: 'Ahmed Tabib | Fullstack Developer JavaScript',
        description:
          'Ahmed Tabib - A skilled Fullstack JavaScript Developer, experienced with Angular, React, Node, Express, Jest, Karma, AWS, and more.',
        author: 'Ahmed Tabib',
        keywords:
          'Ahmed Tabib, full stack developer, JavaScript, Angular, React, Node, Express, Jest, Karma, AWS',
        image: 'https://www.ahmedtabib.com/me.webp',
        canonical: 'https://www.ahmedtabib.com/boot',
      },
    };
    return metaDataMapping[url] || {};
  }
}
