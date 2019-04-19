package com.synisys.hub.syshub.api.controller;

import com.synisys.hub.syshub.api.model.CommentDto;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface CommentController {

    CommentDto create(CommentDto post);

    CommentDto update(CommentDto postDto);

    CommentDto delete(Integer postId);

}
