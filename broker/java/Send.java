import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

import java.nio.charset.StandardCharsets;

public class Send {

    private final static String QUEUE_NAME = "hello";

    public static void main(String[] argv) throws Exception {
        ConnectionFactory factory = new ConnectionFactory();
        
        factory.setUsername("whpark");
        factory.setPassword("abcd1234567890");

        factory.setHost("b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com");
        factory.setPort(5671);
        factory.useSslProtocol();
        
        String message = "Hello World!";
        try (Connection connection = factory.newConnection();
             Channel channel = connection.createChannel()) {
            // channel.queueDeclare(QUEUE_NAME, false, false, false, null);
            if (argv.length > 0)  {
                message = argv[0];
            }
            
            channel.basicPublish("", QUEUE_NAME, null, message.getBytes(StandardCharsets.UTF_8));
            System.out.println(" [x] Sent '" + message + "'");
        }
    }
}