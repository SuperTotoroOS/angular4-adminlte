import { Angular4AdminltePage } from './app.po';

describe('angular4-adminlte App', function() {
  let page: Angular4AdminltePage;

  beforeEach(() => {
    page = new Angular4AdminltePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
