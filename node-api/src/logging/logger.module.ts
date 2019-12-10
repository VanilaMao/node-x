import { Module, Provider, DynamicModule, Global } from "@nestjs/common";
import { utilities as nestWinstonModuleUtilities,
     WinstonModule, 
     WINSTON_MODULE_NEST_PROVIDER} from 'nest-winston';
import * as winston from 'winston';

@Global()
@Module({
    imports:[WinstonModule]
})
export class LoggerModule{

    // use rootasync can use logging config service to do it
    static forRoot():DynamicModule{
        var module = WinstonModule.forRoot({
            transports: [
              new winston.transports.Console({
                format: winston.format.combine(
                  winston.format.timestamp(),
                  nestWinstonModuleUtilities.format.nestLike(),
                ),
              }),
            ],
        });
        var stockx : Provider= {
            provide: "stockx",
            useFactory: (logger)=>logger,
            inject:[WINSTON_MODULE_NEST_PROVIDER]
        }
        return {
            module: LoggerModule,
            providers: [...module.providers,stockx],
            exports:[...module.providers,stockx]
        } 
    }
}
