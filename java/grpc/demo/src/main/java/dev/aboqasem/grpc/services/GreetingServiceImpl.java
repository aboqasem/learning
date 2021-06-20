package dev.aboqasem.grpc.services;

import dev.aboqasem.grpc.generated.Greet;
import dev.aboqasem.grpc.generated.GreetingGrpc;
import dev.aboqasem.grpc.generated.Person;
import io.grpc.stub.StreamObserver;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class GreetingServiceImpl extends GreetingGrpc.GreetingImplBase {

  @Override
  public void greet(Person request, StreamObserver<Greet> responseObserver) {
    log.info("Called greet with Person: {}", request);

    final Greet response = Greet.newBuilder()
        .setContent("Greetings, " + request.getName() + "!")
        .build();

    responseObserver.onNext(response);
    responseObserver.onCompleted();
  }
}
