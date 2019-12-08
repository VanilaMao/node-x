import { Injectable } from '@nestjs/common';
import { Env } from './env.model';
import config from './env.config';

@Injectable()
export class EnvConfigService {
  private  env: Env;

  constructor(){

    var confEnv = config.get('env');
    config.loadFile('./src/env/config/' + confEnv + '.json');

    config.validate({allowed: 'strict'});

    this.env = new Env(config);
  }

  getEnv(): Env {
    return this.env;
  }
}