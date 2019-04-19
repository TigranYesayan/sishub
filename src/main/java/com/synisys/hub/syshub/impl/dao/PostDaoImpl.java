package com.synisys.hub.syshub.impl.dao;

import com.synisys.hub.syshub.api.dao.PostDao;
import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.PostType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by erikk on 19-Apr-19.
 */
@Component
public class PostDaoImpl implements PostDao {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public PostDaoImpl(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public PostDto create(PostDto post) {
        return null;
    }

    @Override
    public PostDto update(PostDto post) {
        return null;
    }

    @Override
    public PostDto delete(Integer id) {
        return null;
    }

    @Override
    public PostDto loadById(Integer id) {
        Map<String, Object> params = new HashMap<>();
        params.put("ID", id);
//        return jdbcTemplate.queryForObject("exec USP_S_POSTS_ID @ID=:ID", params, (rs, rowNum) -> createPostDto(rs));
        return null;
    }

    private PostDto createQuestion(Map<String, Object> post) {
        return new PostDto(
                (Integer) post.get("Id"),
                ((Integer) post.get("IsAccepted")) == 1,
                (String) post.get("Body"),
                (String) post.get("Title"),
                post.get("ClosedDate") != null ? ((Date) post.get("ClosedDate")).toLocalDate() : null,
                post.get("CreationDate") != null ? ((Date) post.get("CreationDate")).toLocalDate() : null,
                post.get("LastActivityDate") != null ? ((Date) post.get("LastActivityDate")).toLocalDate() : null,
                post.get("LastEditDate") != null ? ((Date) post.get("LastEditDate")).toLocalDate() : null,
                (Integer) post.get("LastEditorUserId"),
                (Integer) post.get("OwnerUserId"),
                null,
                PostType.QUESTION,
                (Integer) post.get("Score"),
                false,
                post.get("Tags") == null ? new ArrayList<>() : Arrays.asList(((String) post.get("Tags")).split(",")),
                null,
                null);
    }

    private PostDto createAnswer(Map<String, Object> post) {
        return new PostDto(
                (Integer) post.get("Id"),
                ((Integer) post.get("IsAccepted")) == 1,
                (String) post.get("Body"),
                (String) post.get("Title"),
                post.get("ClosedDate") != null ? ((Date) post.get("ClosedDate")).toLocalDate() : null,
                post.get("CreationDate") != null ? ((Date) post.get("CreationDate")).toLocalDate() : null,
                post.get("LastActivityDate") != null ? ((Date) post.get("LastActivityDate")).toLocalDate() : null,
                post.get("LastEditDate") != null ? ((Date) post.get("LastEditDate")).toLocalDate() : null,
                (Integer) post.get("LastEditorUserId"),
                (Integer) post.get("OwnerUserId"),
                null,
                PostType.QUESTION,
                (Integer) post.get("Score"),
                false,
                post.get("Tags") == null ? new ArrayList<>() : Arrays.asList(((String) post.get("Tags")).split(",")),
                null,
                null);
    }

    @Override
    public List<PostDto> loadAll() {
        return jdbcTemplate.queryForList("exec USP_S_POSTS_QUESTIONS", new HashMap<>()).stream().map(this::createQuestion).collect(Collectors.toList());
    }

    @Override
    public List<PostDto> loadByFilter(FilterDto filter) {
        return null;
    }

    @Override
    public boolean accept(Integer id) {
        return false;
    }

}
