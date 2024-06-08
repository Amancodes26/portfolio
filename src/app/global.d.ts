export {};

declare global {
  interface Window {
    gtag: (command: string, config: string, params?: any) => void;
  }
}
