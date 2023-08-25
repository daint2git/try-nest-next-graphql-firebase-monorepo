declare global {
  type Maybe<T> = T | undefined;

  namespace NodeJS {
    interface ProcessEnv {}
  }
}

export {};
