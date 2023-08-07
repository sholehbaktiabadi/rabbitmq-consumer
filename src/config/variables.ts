import { configDotenv } from 'dotenv'
configDotenv()

type EnvVariables = {
    APP_PORT: number
    APP_ENV: string
    RABBITMQ_HOST: string
    RABBITMQ_PORT: number
    RABBITMQ_USERNAME: string
    RABBITMQ_PASSWORD: string
}

export const Variables: EnvVariables = {
    APP_PORT: process.env.APP_PORT as unknown as number,
    APP_ENV: process.env.APP_ENV as string,
    RABBITMQ_HOST: process.env.RABBITMQ_HOST as string,
    RABBITMQ_PORT: process.env.RABBITMQ_PORT as unknown as number,
    RABBITMQ_USERNAME: process.env.RABBITMQ_USERNAME as string,
    RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD as string,
}