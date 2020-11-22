import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailDTO } from './app.dto';

@Injectable()
export class AppService {
  constructor(
    private readonly emailService: MailerService,
    private readonly config: ConfigService,
  ) {}

  async notifyMail(emailDTO: EmailDTO) {
    return this.emailService.sendMail({
      to: this.config.get<string>('EMAIL_USER'),
      subject: 'Tienes un nuevo comentario!',
      template: 'notify.hbs',
      context: {
        username: emailDTO.username,
        comment: emailDTO.comment,
      },
    });
  }
}
