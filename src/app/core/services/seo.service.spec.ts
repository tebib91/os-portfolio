import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SeoService,
        {
          provide: Title,
          useValue: jasmine.createSpyObj('Title', ['setTitle']),
        },
        {
          provide: Meta,
          useValue: jasmine.createSpyObj('Meta', ['updateTag']),
        },
      ],
    });
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
    router = TestBed.inject(Router);
  });

  it('should update the meta tags', () => {
    const testUrl = '/';
    const metaData = service.getMetaData(testUrl);
    spyOn(service, 'getMetaData').and.returnValue(metaData);
    router.navigate([testUrl]);

    service.updateMetaData(testUrl);

    expect(titleService.setTitle).toHaveBeenCalledWith(metaData.title);
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { name: 'description', content: metaData.description },
      'meta'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { name: 'author', content: metaData.author },
      'meta'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { name: 'keywords', content: metaData.keywords },
      'meta'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { property: 'og:image', content: metaData.image },
      'meta'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { name: 'twitter:image', content: metaData.image },
      'meta'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith(
      { rel: 'canonical', href: metaData.canonical },
      'link'
    );
    expect(service.getMetaData).toHaveBeenCalledWith(testUrl);
  });
});
