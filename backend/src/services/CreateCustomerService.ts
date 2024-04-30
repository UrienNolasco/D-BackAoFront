import prismaCliente from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
}

class CreateCustomerService{
    async execute({name, email}: CreateCustomerProps){
        
        if(!name || !email){
            throw new Error("Prencha todos os campos");
        }

        const customer = await prismaCliente.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        return customer
    }
}

export {CreateCustomerService}