import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MensagemDto } from 'src/Dtos/mensagem-dto';
import { MensagemService } from './mensagem.service';

@Controller('mensagem')
export class MensagemController {
  constructor(private messageService: MensagemService) {}
  @Post()
  async retornaMensagem(@Body() mensagemDto: MensagemDto) {
    const { messageBody } = mensagemDto;
    this.messageService.sendMessage(messageBody);
    return JSON.stringify(`{sua mensagem é : ${messageBody}}`);
  }
  @Get()
  async consultaMensagem(): Promise<string> {
    const mensagemRecebida: string =
      await this.messageService.consultaMensagem();
    const messageObj = { message: mensagemRecebida };
    return JSON.stringify(messageObj);
  }
}
