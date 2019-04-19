package com.synisys.hub.syshub.impl.service;

import com.synisys.hub.syshub.api.dao.PostDao;
import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import com.synisys.hub.syshub.api.service.PostService;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public class PostServiceImpl implements PostService {

    @Autowired
    private PostDao postDao;

    @Autowired
    private VoteService voteService;

    @Override
    public PostDto create(PostDto post) {
        return null;
    }

    @Override
    public PostDto update(PostDto post) {
        return null;
    }

    @Override
    public PostDto delete(Integer postId) {
        return null;
    }

    @Override
    public PostDto loadById(Integer id) {
        return null;
    }

    @Override
    public List<PostDto> loadAll() {
        return null;
    }

    @Override
    public List<PostDto> loadByFilter(FilterDto filter) {
        return null;
    }

    @Override
    public PostDto vote(VoteDto vote) {
        return null;
    }

    @Override
    public PostDto accept(Integer postId) {
        return null;
    }

}
