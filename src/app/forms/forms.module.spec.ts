import { FormsLocalModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: FormsLocalModule;

  beforeEach(() => {
    formsModule = new FormsLocalModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
