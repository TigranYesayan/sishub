package com.synisys.hub.syshub.impl.controller;

import com.synisys.hub.syshub.api.controller.CommentController;
import com.synisys.hub.syshub.api.model.CommentDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/comments")
public class CommentControllerImpl implements CommentController {


    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    public CommentDto create(@RequestBody CommentDto comment) {
        return null;
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public CommentDto update(@RequestBody CommentDto comment) {
        return null;
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public CommentDto delete(@PathVariable("id") Integer commentId) {
        return null;
    }

}
