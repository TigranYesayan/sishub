package com.synisys.hub.syshub.api.controller;

import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */

public interface PostController {

    PostDto create(PostDto post);

    PostDto update(PostDto post);

    PostDto delete(Integer postId);

    PostDto get(Integer postId);

    List<PostDto> getAll();

    List<PostDto> getByFilter(FilterDto filter);

    PostDto vote(VoteDto vote);

    PostDto accept(Integer postId);

}
