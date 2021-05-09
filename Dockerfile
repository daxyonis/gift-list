FROM openjdk:11-jre-slim
RUN mkdir /opt/app
ADD target/*.jar /opt/app/japp.jar
CMD java -XX:+PrintFlagsFinal $JAVA_OPTS -jar /opt/app/japp.jar