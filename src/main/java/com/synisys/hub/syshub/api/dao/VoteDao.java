package com.synisys.hub.syshub.api.dao;

import com.synisys.hub.syshub.api.model.VoteDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface VoteDao {

    Integer create(VoteDto vote);

    List<VoteDto> loadPostVotes(Integer postId);

    List<VoteDto> loadCommentVotes(Integer commentId);

}
