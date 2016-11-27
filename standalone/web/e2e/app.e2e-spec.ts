import { DIMusicWebPage } from './app.po';

describe('dimusic-web App', function() {
  let page: DIMusicWebPage;

  beforeEach(() => {
    page = new DIMusicWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
