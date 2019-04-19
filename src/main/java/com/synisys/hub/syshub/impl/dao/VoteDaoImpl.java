package com.synisys.hub.syshub.impl.dao;

import com.synisys.hub.syshub.api.dao.VoteDao;
import com.synisys.hub.syshub.api.model.VoteDto;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by erikk on 19-Apr-19.
 */
@Component
public class VoteDaoImpl implements VoteDao {

    @Override
    public Integer create(VoteDto vote) {
        return null;
    }

    @Override
    public List<VoteDto> loadPostVotes(Integer postId) {
        return null;
    }

    @Override
    public List<VoteDto> loadCommentVotes(Integer commentId) {
        return null;
    }

}
