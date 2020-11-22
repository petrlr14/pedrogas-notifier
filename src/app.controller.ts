import {
  Body,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { EmailDTO } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Post('/notify-comment')
  async getHello(@Body() email: EmailDTO) {
    try {
      await this.appService.notifyMail(email);
      return;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
