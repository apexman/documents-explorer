package hello.document;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
public class Document {
    @Id
    @Column(name = "document_id")
    private String id = UUID.randomUUID().toString().replace("-", "");

    @Column(name = "doc_name")
    private String name = "TEMP";

    @Column(nullable = false)
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date created = new Date();

    @Column(name = "createdby", nullable = false)
    private String createdBy = "system";

    @Column(nullable = false)
    @Temporal(value = TemporalType.TIMESTAMP)
    private Date modified = new Date();

    @Column(name = "modifiedby", nullable = false)
    private String modifiedBy = "system";

    @Column(length = 1, nullable = false)
    private String status = "I";

    @Column(name = "doc_type", nullable = false, length = 4)
    private String docType = "1010";

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getModified() {
        return modified;
    }

    public void setModified(Date modified) {
        this.modified = modified;
    }

    public String getModifiedBy() {
        return modifiedBy;
    }

    public void setModifiedBy(String modifiedBy) {
        this.modifiedBy = modifiedBy;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDocType() {
        return docType;
    }

    public void setDocType(String docType) {
        this.docType = docType;
    }

    @Override
    public String toString() {
        return "Document{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", created=" + created +
                ", createdBy='" + createdBy + '\'' +
                ", modified='" + modified + '\'' +
                ", modifiedBy='" + modifiedBy + '\'' +
                ", status='" + status + '\'' +
                ", docType='" + docType + '\'' +
                '}';
    }

}
