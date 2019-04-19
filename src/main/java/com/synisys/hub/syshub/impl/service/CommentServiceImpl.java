package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.CommentDao;
import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.service.CommentService;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentDao commentDao;

    @Autowired
    private VoteService voteService;

    @Override
    public CommentDto create(CommentDto comment) {
        return null;
    }

    @Override
    public CommentDto update(CommentDto comment) {
        return null;
    }

    @Override
    public CommentDto delete(Integer commentId) {
        return null;
    }

    @Override
    public List<CommentDto> loadAll() {
        return null;
    }

}
