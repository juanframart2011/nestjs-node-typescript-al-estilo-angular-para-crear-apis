import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajeService:MensajesService){}
    @Post()
    create(@Body() createMensajeDto:CreateMensajeDto, @Res() response){
        
        this.mensajeService.createMensaje(createMensajeDto).then(
            mensaje =>{
                response.status(HttpStatus.CREATED).json(mensaje);
            }
        ).catch(
            error =>{
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje:'error al crear mensaje'
                });
            }
        );
    }

    @Get()
    getAll(@Res() response){
        
        this.mensajeService.getAll().then(
            mensaje =>{
                response.status(HttpStatus.OK).json(mensaje);
            }
        ).catch(
            error =>{
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje:'error al crear mensaje'
                });
            }
        );
    }

    @Put(':id')
    update(@Body() updateMensajeDto:CreateMensajeDto, @Res() response, @Param('id') id:number){
        
        this.mensajeService.updateMessage(+id, updateMensajeDto).then(
            mensaje =>{
                response.status(HttpStatus.OK).json(mensaje);
            }
        ).catch(
            error =>{
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje:'error al modificar mensaje'
                });
            }
        );
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') id:number){
        
        this.mensajeService.delete(id).then(
            mensaje =>{
                response.status(HttpStatus.OK).json(mensaje);
            }
        ).catch(
            error =>{
                response.status(HttpStatus.FORBIDDEN).json({
                    mensaje:'error al crear mensaje'
                });
            }
        );
    }
}
