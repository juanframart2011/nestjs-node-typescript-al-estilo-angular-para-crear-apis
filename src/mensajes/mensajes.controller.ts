import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create(@Body() createMensajeDto:CreateMensajeDto):string{
        
        return 'mensaje creado';
    }

    @Get()
    getAll(){
        return 'Lista de mensajes';
    }

    @Put(':id')
    update(@Body() updateMensajeDto:CreateMensajeDto){
        return 'modificado mensaje';
    }

    @Delete(':id')
    delete(){
        return 'mensaje eliminado';
    }
}
