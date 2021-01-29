import { Plugin } from 'ckeditor5/src/core';

export default class SimpleBoxEditing extends Plugin {
  init() {
    this._defineSchema();
    this._defineConverters();
  }

  _defineSchema() {
    const schema = this.editor.model.schema;
    schema.register('simpleBox', {
      isObject: true,
      allowWhere: '$block',
    });

    schema.register('simpleBoxTitle', {
      isLimit: true,
      allowIn: 'simpleBox',
      allowContentOf: '$block',
    });

    schema.register('simpleBoxDescription', {
      isLimit: true,
      allowIn: 'simpleBox',
      allowContentOf: '$root',
    });
  }

  _defineConverters() {
    const conversion = this.editor.conversion;

    conversion.elementToElement({
      model: 'simpleBox',
      view: {
        name: 'section',
        classes: 'simple-box',
      },
    });

    conversion.elementToElement({
      model: 'simpleBoxTitle',
      view: {
        name: 'h1',
        classes: 'simple-box-title',
      },
    });

    conversion.elementToElement({
      model: 'simpleBoxDescription',
      view: {
        name: 'div',
        classes: 'simple-box-description',
      },
    });
  }
}
