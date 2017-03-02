import { CustomerPage } from './app.po';

describe('customer App', function() {
  let page: CustomerPage;

  beforeEach(() => {
    page = new CustomerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
