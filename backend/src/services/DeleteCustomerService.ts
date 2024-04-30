import prismaCliente from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService{
    async execute({id} : DeleteCustomerProps){
        if(!id){
            throw new Error("Id inválido")
        }

        const findCustomer = await prismaCliente.customer.findFirst({
            where:{
                id
            }
        })

        if (!findCustomer){
            throw new Error("Cliente não encontrado")
        }

        await prismaCliente.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return {message: "Cliente deletado com sucesso"}
    }

}

export { DeleteCustomerService}