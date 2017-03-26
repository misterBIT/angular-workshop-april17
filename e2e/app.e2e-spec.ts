import { Angular4TestdrivePage } from './app.po';

describe('angular4-testdrive App', () => {
  let page: Angular4TestdrivePage;

  beforeEach(() => {
    page = new Angular4TestdrivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
