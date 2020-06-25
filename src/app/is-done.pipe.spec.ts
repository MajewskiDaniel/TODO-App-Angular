import { IsDonePipe } from './is-done.pipe';

describe('IsDonePipe', () => {
  it('create an instance', () => {
    const pipe = new IsDonePipe();
    expect(pipe).toBeTruthy();
  });
});
