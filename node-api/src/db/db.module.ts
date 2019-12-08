import { TypeOrmModule} from '@nestjs/typeorm';
import { Module,DynamicModule} from '@nestjs/common';
import { Connection, ConnectionOptions} from 'typeorm';
import {EnvConfigService} from '../env/env.config.service';
import { EnvModule } from 'src/env/env.module';
@Module({
    imports:[TypeOrmModule, EnvModule],
})
export class DbModule{
    static forRootAsync(){
        // build connect providers
        return TypeOrmModule.forRootAsync({
            imports: [EnvModule],
            useFactory: async (configService: EnvConfigService) => {
                const env = configService.getEnv();
                const dbOptions = {
                host: env.db.host,
                port: env.db.port,
                username: env.db.user,
                password: env.db.password,
                database: env.db.db,
                synchronize: true,
                entities:[__dirname + '/**/*.entity{.ts,.js}'] 
                };
                if(env.db.type === "postgres" ){
                    return {
                            ...dbOptions,
                            type: "postgres" as "postgres" //awsome
                        };         
                }
                return {
                    ...dbOptions,
                    type: "mongodb" as  "mongodb" 
                };
            },
            inject: [EnvConfigService],
        });  
    }

    //build repsitory provider
    static forFeature(
        entities: Function[] = [],
        connection:
          | Connection
          | ConnectionOptions
          | string = 'default',
      ): DynamicModule {

        var module = TypeOrmModule.forFeature(entities,connection);
        return {
          module: DbModule,
          providers: module.providers,
          exports: module.providers,
        };
      }
}