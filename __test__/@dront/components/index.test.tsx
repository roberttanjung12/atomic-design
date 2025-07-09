import * as components from '@/@dront/components';

describe('Component Exports', () => {
  it('should export CodeSnippet component', () => {
    expect(components.CodeSnippet).toBeTruthy();
  });

  it('should export Drogo component', () => {
    expect(components.Drogo).toBeTruthy();
  });

  it('should export DynamicAlert component', () => {
    expect(components.DynamicAlert).toBeTruthy();
  });

  it('should export Field component', () => {
    expect(components.Field).toBeTruthy();
  });

  it('should export LoadingScreen component', () => {
    expect(components.LoadingScreen).toBeTruthy();
  });

  it('should export MainScrollbar component', () => {
    expect(components.MainScrollbar).toBeTruthy();
  });

  it('should export PageID component', () => {
    expect(components.PageID).toBeTruthy();
  });
});
