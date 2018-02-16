import { PrjStartPage } from './app.po';

describe('prj-start App', function() {
  let page: PrjStartPage;

  beforeEach(() => {
    page = new PrjStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
