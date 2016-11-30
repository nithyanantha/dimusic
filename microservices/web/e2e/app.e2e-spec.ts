import { DimusicWebPage } from './app.po';

describe('dimusic-web App', function() {
  let page: DimusicWebPage;

  beforeEach(() => {
    page = new DimusicWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
