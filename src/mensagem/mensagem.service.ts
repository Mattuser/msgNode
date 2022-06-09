import { Injectable } from '@nestjs/common';

@Injectable()
export class MensagemService {
  private mensagemSalva: string;
  async sendMessage(mensagem: string): Promise<string> {
    this.mensagemSalva = await mensagem;
    console.log(this.mensagemSalva);
    return this.mensagemSalva;
  }
  async consultaMensagem(): Promise<string> {
    console.log(this.mensagemSalva);
    return this.mensagemSalva;
  }
}
