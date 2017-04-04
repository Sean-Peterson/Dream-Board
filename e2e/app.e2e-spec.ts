import { DreamBoardPage } from './app.po';

describe('dream-board App', function() {
  let page: DreamBoardPage;

  beforeEach(() => {
    page = new DreamBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
