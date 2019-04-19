package com.synisys.hub.syshub.impl.controller;

import com.synisys.hub.syshub.api.controller.CommentController;
import com.synisys.hub.syshub.api.model.CommentDto;
import com.synisys.hub.syshub.api.service.CommentService;
import com.synisys.hub.syshub.api.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/comments")
public class CommentControllerImpl implements CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentControllerImpl(CommentService commentService) {
        this.commentService = commentService;
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    public CommentDto create(@RequestBody CommentDto comment) {
        return commentService.create(comment);
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public CommentDto update(@RequestBody CommentDto comment) {
        return commentService.update(comment);
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public CommentDto delete(@PathVariable("id") Integer commentId) {
        return commentService.delete(commentId);
    }

}
