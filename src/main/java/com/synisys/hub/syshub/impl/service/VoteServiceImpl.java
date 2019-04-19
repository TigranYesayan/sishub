package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.VoteDao;
import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public class VoteServiceImpl implements VoteService {

    @Autowired
    private VoteDao voteDao;

    @Override
    public VoteDto create(CommentDto comment) {
        return null;
    }

    @Override
    public List<VoteDto> loadPostVotes(Integer postId) {
        return null;
    }

    @Override
    public List<VoteDto> loadCommentVotes(Integer commentId) {
        return null;
    }

}
