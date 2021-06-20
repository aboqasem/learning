package dev.aboqasem.grpc;

import dev.aboqasem.grpc.generated.Greet;
import dev.aboqasem.grpc.generated.GreetingGrpc;
import dev.aboqasem.grpc.generated.Person;
import io.grpc.Channel;
import io.grpc.ManagedChannelBuilder;

public class GreetingClient {
  private final Channel channel;
  private final GreetingGrpc.GreetingBlockingStub greetingService;

  public GreetingClient(String host, int port) {
    this.channel = ManagedChannelBuilder.forAddress(host, port).usePlaintext().build();
    this.greetingService = GreetingGrpc.newBlockingStub(this.channel);
  }

  public Greet greet(Person person) {
    if (this.greetingService != null) {
      return this.greetingService.greet(person);
    }
    return null;
  }
}
