package com.synisys.hub.syshub.api.model;

import javax.xml.bind.annotation.XmlRootElement;
import java.time.LocalDate;
import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@XmlRootElement
public class PostDto {

    public PostDto(Integer id, boolean accepted, String body, String title, LocalDate closedDate,
                   LocalDate creationDate, LocalDate lastActivityDate, LocalDate lastEditDate,
                   Integer lastEditorUserId, Integer ownerUserId, Integer parentId, PostType postTypeId,
                   Integer score, boolean isVoted, List<String> tags, List<PostDto> answers, List<CommentDto> comments) {
        this.id = id;
        this.accepted = accepted;
        this.body = body;
        this.title = title;
        this.closedDate = closedDate;
        this.creationDate = creationDate;
        this.lastActivityDate = lastActivityDate;
        this.lastEditDate = lastEditDate;
        this.lastEditorUserId = lastEditorUserId;
        this.ownerUserId = ownerUserId;
        this.parentId = parentId;
        this.postTypeId = postTypeId;
        this.score = score;
        this.isVoted = isVoted;
        this.tags = tags;
        this.answers = answers;
        this.comments = comments;
    }

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
    public boolean isVoted;
    public List<String> tags;
    public List<PostDto> answers;
    public List<CommentDto> comments;

}
