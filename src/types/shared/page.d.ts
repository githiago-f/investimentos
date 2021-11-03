declare module '@shared/page' {
  type Page<T> = {
    content: T[];
    empty: boolean;
    first: boolean;
    number: number;
    last: boolean;
    totalPages: number;
  }
}
