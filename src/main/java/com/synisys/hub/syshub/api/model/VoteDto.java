package com.synisys.hub.syshub.api.model;

import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDate;

/**
 * Created by erikk on 19-Apr-19.
 */
@XmlRootElement
public class VoteDto {

    public Integer id;
    public LocalDate creationDate;
    public Integer userId;
    public Integer postId;
}
