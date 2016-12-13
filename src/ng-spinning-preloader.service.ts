import {
  Injectable,
  Inject
} from '@angular/core';

import {
  DOCUMENT
} from '@angular/platform-browser';

import {
  CONTAINER_QUERY,
  COMPLETE_CLASS_NAME,
  TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE,
  EMULATE_ELEMENT_NAME
} from './ng-spinning-preloader.constants';

import {NG_SPINNING_PRELOADER_TYPE} from './ng-spinning-preloader.types';

@Injectable()
export class NgSpinningPreloader {
  _container: NG_SPINNING_PRELOADER_TYPE;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.container = this.document.querySelector(CONTAINER_QUERY);
  }

  start() {
    this.container.classList.remove(COMPLETE_CLASS_NAME);
  }

  stop() {
    this.container.classList.add(COMPLETE_CLASS_NAME);
  }

  get container(): NG_SPINNING_PRELOADER_TYPE {
    return this._container;
  }

  set container(element) {
    if (!element) {
      NgSpinningPreloader.errorHandler();
    }

    this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
  }

  static errorHandler() {
    throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
  }
}
