import devEnv from '../_env_/development.json'
import prodEnv from '../_env_/production.json'

export interface Env {
    ENV: string
    APP_NAME: string
}

let config: Env = {
    ...devEnv,
}

if (process.env.NODE_ENV === 'production') {
    config = {
        ...config,
        ...prodEnv,
    }
}

export default config
