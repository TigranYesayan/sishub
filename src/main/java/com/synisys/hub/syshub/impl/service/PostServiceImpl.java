package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.PostDao;
import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import com.synisys.hub.syshub.api.service.PostService;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@Service
public class PostServiceImpl implements PostService {

    private final PostDao postDao;

    private final VoteService voteService;

    @Autowired
    public PostServiceImpl(PostDao postDao, VoteService voteService) {
        this.postDao = postDao;
        this.voteService = voteService;
    }

    @Override
    public PostDto create(PostDto post) {
        return postDao.create(post);
    }

    @Override
    public PostDto update(PostDto post) {
        return postDao.update(post);
    }

    @Override
    public PostDto delete(Integer id) {
        return postDao.delete(id);
    }

    @Override
    public PostDto loadById(Integer id) {
        return postDao.loadById(id);
    }

    @Override
    public List<PostDto> loadAll() {
        return postDao.loadAll();
    }

    @Override
    public List<PostDto> loadByFilter(FilterDto filter) {
        return postDao.loadByFilter(filter);
    }

    @Override
    public Integer vote(VoteDto vote) {
        return voteService.create(vote);
    }

    @Override
    public boolean accept(Integer id) {
        return postDao.accept(id);
    }

}
