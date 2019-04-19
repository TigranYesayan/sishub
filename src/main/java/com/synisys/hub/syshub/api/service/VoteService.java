package com.synisys.hub.syshub.api.service;

import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.model.VoteDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface VoteService {

    VoteDto create(CommentDto comment);

    List<VoteDto> loadPostVotes(Integer postId);

    List<VoteDto> loadCommentVotes(Integer commentId);

}
