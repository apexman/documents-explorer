package hello;

import hello.document.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

@Service
public class InitDefaultData {
    Logger logger = LoggerFactory.getLogger(InitDefaultData.class);

    @EventListener(ApplicationReadyEvent.class)
    public void initTestData(){
        logger.info("Initialize test data");

        Document document = new Document();
        System.out.println(document);

        logger.info("Initialization completed");
    }

}
