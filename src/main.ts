import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`Listening on http://localhost:${port}`);
}
bootstrap();
