/** quick shim for fetch API until TS 2.2.1 includes it in lib.d.ts */
declare function fetch(url: string): Promise<{ json(): any }>;
