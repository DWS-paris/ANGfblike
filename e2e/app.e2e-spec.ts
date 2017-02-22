import { ANGfblikePage } from './app.po';

describe('angfblike App', function() {
  let page: ANGfblikePage;

  beforeEach(() => {
    page = new ANGfblikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
