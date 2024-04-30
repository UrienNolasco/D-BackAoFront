import prismaCliente from "../prisma";

class ListCustomerService{
    async execute(){
        const customers = await prismaCliente.customer.findMany();
        return customers;
    }
}

export { ListCustomerService}