import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import java.nio.charset.StandardCharsets;

public class Recv {
  
  private final static String QUEUE_NAME = "hello";

  public static void main(String[] argv) throws Exception {
    ConnectionFactory  factory = new ConnectionFactory();
    factory.setHost("b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com");
    factory.setPort(5671);
    factory.setUsername("whpark");
    factory.setPassword("abcd1234567890");
    factory.useSslProtocol();

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    System.out.println(" [*] Waiting for messages. To exit press CTRL+C");

    DeliverCallback deliverCallback = ( customerTag, delivery) -> {
      String message = new String(delivery.getBody(), StandardCharsets.UTF_8);
      System.out.println(" [x] Received '" + message + "'");
    };

    channel.basicConsume(QUEUE_NAME, true, deliverCallback, consumerTag -> {});
  }

}
