import {
  Injectable,
  Inject,
  Renderer
} from '@angular/core';

import {
  DOCUMENT
} from '@angular/platform-browser';

import {
  CONTAINER_QUERY,
  COMPLETE_CLASS_NAME
} from './ng-spinning-preloader.constants'

import {
  INgSpinningPreloader
} from './ng-spinning-preloader.interfaces'

@Injectable()
export class NgSpinningPreloader implements INgSpinningPreloader {
  container: Element;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.container = this.document.querySelector(CONTAINER_QUERY);
  }

  start() {
    this.container.classList.remove(COMPLETE_CLASS_NAME);
  }

  stop() {
    this.container.classList.add(COMPLETE_CLASS_NAME);
  }
}
