package com.synisys.hub.syshub.impl.controller;

import com.synisys.hub.syshub.api.controller.PostController;
import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/posts")
public class PostControllerImpl implements PostController {

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    public PostDto create(@RequestBody PostDto post) {
        return null;
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public PostDto update(@RequestBody PostDto postDto) {
        return null;
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public PostDto delete(@PathVariable("id") Integer postId) {
        return null;
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public PostDto get(@PathVariable("id") Integer postId) {
        return null;
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.GET)
    public List<PostDto> getAll() {
        return null;
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    public List<PostDto> getByFilter(@RequestBody FilterDto filterDto) {
        return null;
    }

    @Override
    @RequestMapping(path = "/vote", method = RequestMethod.POST)
    public PostDto vote(VoteDto vote) {
        return null;
    }

    @Override
    @RequestMapping(path = "/accept/{id}", method = RequestMethod.POST)
    public PostDto accept(Integer postId) {
        return null;
    }


}
