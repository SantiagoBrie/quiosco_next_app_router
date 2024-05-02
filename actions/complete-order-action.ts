'use server'
import { revalidatePath } from "next/cache"
import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/schema"

// export async function completeOrder(formData: FormData) {
//     const orderId = formData.get('order_id')!
//     try {
//         await prisma.order.update({
//             where: {
//                 id: +orderId
//             },
//             data: {
//                 status: true,
//                 orderReadyAt: new Date(Date.now())
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

/** SON DOS FORMAS DE HACER EL CÓDIGO Y VALIDAR QUE ORDERID LLEGUE SIEMPRE Y SEA UN NUMERO */

export async function completeOrder(formData: FormData) {
    const data = {
        orderId: formData.get('order_id')
    }
    const result = OrderIdSchema.safeParse(data)
    if (result.success) {
        try {
            await prisma.order.update({
                where: {
                    id: result.data.orderId
                },
                data: {
                    status: true,
                    orderReadyAt: new Date(Date.now())
                }
            })
            revalidatePath('/admin/orders')
        } catch (error) {
            console.log(error)
        }
    }
}