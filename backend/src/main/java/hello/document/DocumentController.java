package hello.document;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/document")
public class DocumentController {
    @Autowired
    private DocumentRepository documentRepository;

    @RequestMapping(value = {"", "/", "/all"}, method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Document> getAll() {
        return documentRepository.findAll();
    }
}
