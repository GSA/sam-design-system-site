
import { MarkdownProcessor } from './markdown-processor';

describe('Sam Design System Markdown Service', () => {
  const processor = new MarkdownProcessor('/assets/markdown/');
  it('should find the right file in assets', () => {
    const actual = processor
      .processString(
        '_docs/form-controls/autocomplete/documentation.md'
      );

    const expected = '/assets/markdown/_docs-form-controls-autocomplete-documentation.txt';

    expect(actual).toEqual(expected);
  });
});
