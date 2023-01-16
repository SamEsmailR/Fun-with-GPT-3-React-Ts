/// <reference types="react-scripts" />
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        API_URL:string;
        SECRET_API_KEY:string;
      }
     }
   }