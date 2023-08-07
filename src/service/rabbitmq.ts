import client from 'amqplib'
import { Variables } from '../config/variables'


export class MessageBroker{
    private async rabbitMqConnection(){
        return await client.connect({ 
            username: Variables.RABBITMQ_USERNAME,
            password: Variables.RABBITMQ_PASSWORD,
            hostname: Variables.RABBITMQ_HOST,
            port: Variables.RABBITMQ_PORT
            })
    }
    
    async getMessage(queueName: string){
        try {
            const connection = await this.rabbitMqConnection()
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName, { durable: false });
            channel.consume(
              queueName,
              (message) => {
                console.log(`Received: ${message?.content}`);
              },
              { noAck: true } 
            );
          } catch (error) {
            console.error(error);
          }
    }
}