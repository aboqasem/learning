package dev.aboqasem.grpc;

import dev.aboqasem.grpc.services.GreetingServiceImpl;
import io.grpc.Server;
import io.grpc.ServerBuilder;
import lombok.Synchronized;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

@Slf4j
public class GrpcServer {
  private final int port;
  private Server server;
  private boolean isStarted = false;

  public GrpcServer(int port) {
    this.port = port;

    Runtime.getRuntime().addShutdownHook(new Thread() {
      @Override
      public void run() {
        log.error("JVM is shutting down; shutting down gRPC server...");
        GrpcServer.this.shutdown();
      }
    });
  }

  public void start() {
    log.info("Starting gRPC server...");
    ServerBuilder<?> serverBuilder = ServerBuilder.forPort(this.port);
    serverBuilder.addService(new GreetingServiceImpl());

    try {
      this.server = serverBuilder.build().start();
      this.isStarted = true;
      log.info("Started gRPC server on port: {}.", this.port);
    } catch (IOException e) {
      log.error("Unable to start server.");
      e.printStackTrace();
    }
  }

  protected void shutdown() {
    log.info("Shutting down gRPC server...");
    this.server.shutdown();
    log.info("gRPC server has been shut down.");
  }

  public void blockUntilShutdown() throws InterruptedException {
    if (this.server != null) {
      server.awaitTermination();
    }
  }

  @Synchronized
  public boolean isStarted() {
    return this.isStarted;
  }
}
