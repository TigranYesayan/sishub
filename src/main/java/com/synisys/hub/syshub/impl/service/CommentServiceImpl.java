package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.CommentDao;
import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.service.CommentService;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@Service
public class CommentServiceImpl implements CommentService {

    private final CommentDao commentDao;

    @Autowired
    public CommentServiceImpl(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    @Override
    public CommentDto create(CommentDto comment) {
        return commentDao.create(comment);
    }

    @Override
    public CommentDto update(CommentDto comment) {
        return commentDao.update(comment);
    }

    @Override
    public CommentDto delete(Integer commentId) {
        return commentDao.delete(commentId);
    }

    @Override
    public List<CommentDto> loadAll() {
        return commentDao.loadAll();
    }

}
