# стянуть жава8
#FROM tomcat:8-jre8
FROM openjdk:8-jdk-alpine

# подключить раздел для разворачивания приложения
VOLUME /tmp
# запустить команду
#RUN echo "export JAVA_OPTS=\"-Dapp.env=myapp\"" > /usr/local/tomcat/bin/setenv.sh
# копировать файл в указанный раздел контейнера
#COPY ./MyApplication.jar /usr/local/tomcat/webapps/myapp.jar
# запуск команды
#CMD ["catalina.sh", "run"]

ARG JAR_FILE=MyApplication.jar
ADD ${JAR_FILE} myapp.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/myapp.jar"]