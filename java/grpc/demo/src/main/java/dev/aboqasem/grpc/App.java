package dev.aboqasem.grpc;

public class App {

  public static void main(String[] args) throws InterruptedException {
    final GrpcServer server = new GrpcServer(8080);

    server.start();
    server.blockUntilShutdown();
  }
}
