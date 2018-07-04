package hello.document;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.print.Doc;

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

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(Document document) {
        if (documentRepository.existsById(document.getId()))
            return "Document already exists";

        documentRepository.save(document);
        return "Saved";
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String update(Document document) {
        documentRepository.save(document);

        return "Updated";
    }
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public String delete(Document document) {
        document.setStatus("D");
        documentRepository.save(document);
        return "Deleted";
    }
}
