import { CongAppPage } from './app.po';

describe('cong-app App', () => {
  let page: CongAppPage;

  beforeEach(() => {
    page = new CongAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
