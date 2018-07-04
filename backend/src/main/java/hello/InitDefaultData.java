package hello;

import hello.document.Document;
import hello.document.DocumentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

@Service
public class InitDefaultData {
    Logger logger = LoggerFactory.getLogger(InitDefaultData.class);

    @Autowired
    DocumentRepository documentRepository;

    @EventListener(ApplicationReadyEvent.class)
    public void initTestData(){
        logger.info("Initialize test data");

        Document document = new Document();
        document.setId("165d4252b8f645f0b66c1fc7f727bb4a");
        document.setName("TEST DOCUMENT");
        System.out.println(document);
        documentRepository.save(document);

        logger.info("Initialization completed");
    }

}
