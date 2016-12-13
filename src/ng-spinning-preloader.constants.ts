
const CONTAINER_CLASS_NAME: string = 'spinning-preloader-container';
const COMPLETE_CLASS_NAME: string = 'complete';
const CONTAINER_QUERY: string = `.${CONTAINER_CLASS_NAME}`;

const CONTAINER_NAME: string = CONTAINER_CLASS_NAME.split('-').join(' ');

export const TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE: string =
  `The ${CONTAINER_NAME} was not found`;

export const EMULATE_ELEMENT_NAME = 'div';

export {
  CONTAINER_QUERY,
  COMPLETE_CLASS_NAME
}
