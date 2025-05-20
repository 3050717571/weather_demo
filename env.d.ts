/// <reference types="vite/client" />
// src/env.d.ts 或 src/shims.d.ts
export {}

declare global {
  interface Window {
    _AMapSecurityConfig?: {
      securityJsCode: string
    }
  }
}
