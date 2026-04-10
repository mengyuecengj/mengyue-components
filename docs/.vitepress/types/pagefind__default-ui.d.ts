declare module '@pagefind/default-ui' {
  export class PagefindUI {
    constructor(options: {
      element?: string | HTMLElement;
      bundlePath?: string;
      pageSize?: number;
      resetStyles?: boolean;
      showImages?: boolean;
      showSubResults?: boolean;
      autofocus?: boolean;
      translations?: Record<string, string>;
    });
  }
}