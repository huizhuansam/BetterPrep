FROM eclipse-temurin:21-alpine

RUN adduser -D spring

RUN mkdir /home/spring/code

WORKDIR /home/spring/code 

USER spring

COPY --chown=spring:spring ./ ./

CMD ["./mvnw", "spring-boot:run"]