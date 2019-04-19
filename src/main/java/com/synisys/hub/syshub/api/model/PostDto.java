package com.synisys.hub.syshub.api.model;

import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@XmlRootElement
public class PostDto {

    public Integer id;
    public boolean accepted;
    public String body;
    public String title;
    public LocalDate closedDate;
    public LocalDate creationDate;
    public LocalDate lastActivityDate;
    public LocalDate lastEditDate;
    public Integer lastEditorUserId;
    public Integer ownerUserId;
    public Integer parentId;
    public PostType postTypeId;
    public Integer score;
    public List<String> tags;
    public List<PostDto> answers;
    public List<CommentDto> comments;

}
