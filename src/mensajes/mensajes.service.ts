import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>
    ){}

    async getAll(){
        return await this.mensajeRepository.find({});
    }

    async createMensaje(mensajeNew:CreateMensajeDto){
        const newMessage = new Mensaje();
        newMessage.mensaje = mensajeNew.mensaje;
        newMessage.nick = mensajeNew.nick;

        return await this.mensajeRepository.save(newMessage);
    }

    async updateMessage(id:number, mensajeNew:CreateMensajeDto){

        const messageUpdate = await this.mensajeRepository.findOneBy({id:id});

        messageUpdate.mensaje = mensajeNew.mensaje;
        messageUpdate.nick = mensajeNew.nick;

        return await this.mensajeRepository.save(messageUpdate);
    }

    async delete(id:number){

        return await this.mensajeRepository.delete(id);
    }
}