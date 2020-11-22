import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config.module';
import { MailModule } from './mailer.module';

@Module({
  imports: [ConfigurationModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
