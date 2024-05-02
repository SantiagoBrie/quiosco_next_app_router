import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    })
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


/** Cliente de Conexiones de Prisma 
 *  Si detecta una conexión global ya no realiza mas conexiones - 
 *  Esto evita tener muchas conexiones abiertas y que la App se vuelva lenta 
 * 
*/