import { MarscolonyMacPage } from './app.po';

describe('marscolony-mac App', function() {
  let page: MarscolonyMacPage;

  beforeEach(() => {
    page = new MarscolonyMacPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
