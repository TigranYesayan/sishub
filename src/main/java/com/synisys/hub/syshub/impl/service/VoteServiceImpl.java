package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.VoteDao;
import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@Service
public class VoteServiceImpl implements VoteService {

    private final VoteDao voteDao;

    @Autowired
    public VoteServiceImpl(VoteDao voteDao) {
        this.voteDao = voteDao;
    }

    @Override
    public Integer create(VoteDto vote) {
        return voteDao.create(vote);
    }

    @Override
    public List<VoteDto> loadPostVotes(Integer postId) {
        return voteDao.loadPostVotes(postId);
    }

    @Override
    public List<VoteDto> loadCommentVotes(Integer commentId) {
        return voteDao.loadCommentVotes(commentId);
    }

}
