import { getDoc } from './index';

describe('Markdown Loading Service', () => {
  describe('getDoc service', () => {
    describe('Valid string formats', () => {
      it('should load with leading slash', () => {
        const valid = '/_docs/components/accordion/design.md';

        expect(getDoc(valid));
      });

      it('should load without leading slash', () => {
        const valid = '/_docs/components/accordion/design.md';

        expect(getDoc(valid));
      });
    });

    describe('Invalid string formats', () => {
      it('must fail if non-string passed', () => {
        const invalid = {};

        expect(() => {
          getDoc(invalid);
        }).toThrow();
      });

      it('must not be an empty string', () => {
        const invalid = '';

        expect(() => {
          getDoc(invalid);
        }).toThrow();
      });

      it('must fail without file extension', () => {
        const invalid = '/_docs/components/accordion/design';

        expect(() => {
          getDoc(invalid);
        }).toThrow();
      });

      it('must fail with only extension', () => {
        const invalid = '/.md';

        expect(() => {
          getDoc(invalid);
        }).toThrow();
      });

      it('must fail without file base name', () => {
        const invalid = '/_docs/components/accordion/.md';

        expect(() => {
          getDoc(invalid);
        }).toThrow();
      });
    });
  });

  describe('Pipelines', () => {
    // processString pipeline
    // processBase pipeline
  });

  describe('Helper functions', () => {});
});
