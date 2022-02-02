import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { InfoService } from '../info.service';
import { DayjsService } from '../dayjs.service';
import { Project, Projects } from '../projects';
import { EnvService } from '../env.service';

const imagePlaceholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  projects: Project[] | undefined = [
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '2021-09-30',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    },
    {
      slug: 'test',
      description: 'test description',
      descritpion_ru: 'test descritpion_ru',
      date: '',
      id: 2,
      tags: 'one, two, three',
      external_url: 'https://ya.ru',
      title: 'test title'
    }
  ];

  constructor(
    private infoService: InfoService,
    private dayjs: DayjsService,
    private env: EnvService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('open-in-new', sanitizer.bypassSecurityTrustResourceUrl('/assets/open_in_new_black_24dp.svg'));
  }

  ngOnInit(): void {
    this.infoService.getProjects().subscribe((result: Projects) => {
      this.projects = result.records;
    });
  }

  getImage(item: Project): string {
    return item.image || imagePlaceholder;
  }

  getDate(item: Project): string {
    return this.dayjs.format(item.date);
  }

  getDescription(item: Project): string {
    if (this.env.lang() === 'ru') {
      return item.descritpion_ru;
    }
    return item.description;
  }
}
