import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaData, MetaDataMapping } from '../models/seo';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log(event.urlAfterRedirects);
        this.updateMetaData(event.urlAfterRedirects);
      });
  }

  updateMetaData(url: string) {
    // Get the meta data for the current URL
    const metaData = this.getMetaData(url);
    console.log({ metaData });
    this.title.setTitle(metaData.title);
    this.meta.updateTag(
      { name: 'description', content: metaData.description },
      'meta'
    );
    this.meta.updateTag({ name: 'author', content: metaData.author }, 'meta');
    this.meta.updateTag(
      { name: 'keywords', content: metaData.keywords },
      'meta'
    );
    this.meta.updateTag(
      { property: 'og:image', content: metaData.image },
      'meta'
    );
    this.meta.updateTag(
      { name: 'twitter:image', content: metaData.image },
      'meta'
    );
    this.meta.updateTag({ rel: 'canonical', href: metaData.canonical }, 'link');
  }

  getMetaData(url: string): MetaData {
    // Example mapping of URLs to meta data
    const metaDataMapping: MetaDataMapping = {
      '/': {
        title: 'Full Stack Developer Portfolio',
        description:
          'View the portfolio of a skilled full stack developer and see examples of web development projects',
        author: 'Ahmed Tabib',
        keywords: 'full stack developer, web development, portfolio, projects',
        image: 'https://www.ahmedtabib.com/me.webp',
        canonical: 'https://www.ahmedtabib.com/',
      },
    };
    return metaDataMapping[url] || {};
  }
}
