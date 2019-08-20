#  Taken from: "https://spring.io/guides/gs/spring-boot-docker/" Containerize it
#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ARG JAR_FILE
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]

#Slightly different implementation, taken from same place
#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ARG DEPENDENCY=target/dependency
#COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
#COPY ${DEPENDENCY}/META-INF /app/META-INF
#COPY ${DEPENDENCY}/BOOT-INF/classes /app
##Should point to our application class where SpringApplication.run() is called
#ENTRYPOINT ["java","-cp","app:app/lib/*","hello.BootApplication"]

# Taken from: "https://spring.io/guides/topicals/spring-boot-docker/"
#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ARG JAR_FILE
#COPY ${JAR_FILE} app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#COPY target/*.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

#Better docker file
FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","hello.BootApplication"]

#Multi-Stage build
#FROM openjdk:8-jdk-alpine as build
#WORKDIR /workspace/app
#
##Fails on this step. Doesn't see mvnw and cannot copy it.
#COPY mvnw .
#COPY .mvn .mvn
#COPY pom.xml .
#COPY src src
#
#RUN ./mvnw install -DskipTests
#RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)
#
#FROM openjdk:8-jdk-alpine
#VOLUME /tmp
#ARG DEPENDENCY=/workspace/app/target/dependency
#COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
#COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
#COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
#ENTRYPOINT ["java","-cp","app:app/lib/*","hello.BootApplication"]

#
#       Skipped the rest of the guide for now due to mvnw issue with configuration aboce
#