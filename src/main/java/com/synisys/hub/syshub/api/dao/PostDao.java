package com.synisys.hub.syshub.api.dao;

import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
public interface PostDao {

    PostDto create(PostDto post);

    PostDto update(PostDto post);

    PostDto delete(Integer id);

    PostDto loadById(Integer id);

    List<PostDto> loadAll();

    List<PostDto> loadByFilter(FilterDto filter);

    boolean accept(Integer id);
}
