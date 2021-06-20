package dev.aboqasem.grpc;

import dev.aboqasem.grpc.generated.Greet;
import dev.aboqasem.grpc.generated.Person;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class App {

  public static void main(String[] args) {
    final GreetingClient greetingClient = new GreetingClient("localhost", 8080);

    final Person person = Person.newBuilder().setName("Mohammad").build();

    log.info("Calling greet with person: {}", person);
    final Greet greet = greetingClient.greet(person);
    log.info("Received greeting: {}", greet.getContent());
  }
}
