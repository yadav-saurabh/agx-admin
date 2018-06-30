import { EditorsModule } from './editors.module';

describe('EditorsModule', () => {
  let editorsModule: EditorsModule;

  beforeEach(() => {
    editorsModule = new EditorsModule();
  });

  it('should create an instance', () => {
    expect(editorsModule).toBeTruthy();
  });
});
