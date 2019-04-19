package com.synisys.hub.syshub.api.dao;

import com.synisys.hub.syshub.api.model.CommentDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface CommentDao {

    CommentDto create(CommentDto comment);

    CommentDto update(CommentDto comment);

    CommentDto delete(Integer commentId);

    List<CommentDto> loadAll();

}
