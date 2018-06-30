import { MapsModule } from './maps.module';

describe('MapsModule', () => {
  let mapsModule: MapsModule;

  beforeEach(() => {
    mapsModule = new MapsModule();
  });

  it('should create an instance', () => {
    expect(mapsModule).toBeTruthy();
  });
});
