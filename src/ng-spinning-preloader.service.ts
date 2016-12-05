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

@Injectable()
export class NgSpinningPreloaderService {
  container: Element;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    this.container = this.document.querySelector(CONTAINER_QUERY);
  }

  start() {

  }

  stop() {
    this.container.classList.add(COMPLETE_CLASS_NAME);
  }
}
