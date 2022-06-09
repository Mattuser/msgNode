import { Module } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { MensagemController } from './mensagem.controller';

@Module({
  providers: [MensagemService],
  controllers: [MensagemController],
})
export class MensagemModule {}
