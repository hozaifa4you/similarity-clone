// import { PrismaClient } from "@prisma/client";

// declare global {
//    // eslint-disable-next-line no-var, no-unused-vars
//    var cachedPrisma: PrismaClient;
// }

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === "production") {
//    prisma = new PrismaClient();
// } else {
//    if (!global.cachedPrisma) {
//       global.cachedPrisma = new PrismaClient();
//    }
//    prisma = global.cachedPrisma;
// }

// export const db = prisma;

/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
   var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
