package com.synisys.hub.syshub.api.service;

import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface PostService {

    PostDto create(PostDto post);

    PostDto update(PostDto post);

    PostDto delete(Integer postId);

    PostDto loadById(Integer id);

    List<PostDto> loadAll();

    List<PostDto> loadByFilter(FilterDto filter);

    Integer vote(VoteDto vote);

    boolean accept(Integer postId);

}
