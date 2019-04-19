package com.synisys.hub.syshub.impl.controller;

import com.synisys.hub.syshub.api.controller.PostController;
import com.synisys.hub.syshub.api.dao.CommentDao;
import com.synisys.hub.syshub.api.model.FilterDto;
import com.synisys.hub.syshub.api.model.PostDto;
import com.synisys.hub.syshub.api.model.VoteDto;
import com.synisys.hub.syshub.api.service.PostService;
import com.synisys.hub.syshub.api.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/posts")
public class PostControllerImpl implements PostController {

    private final PostService postService;

    @Autowired
    public PostControllerImpl(PostService postService) {
        this.postService = postService;
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.POST)
    public PostDto create(@RequestBody PostDto post) {
        return postService.create(post);
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.PUT)
    public PostDto update(@RequestBody PostDto post) {
        return postService.update(post);
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public PostDto delete(@PathVariable("id") Integer postId) {
        return postService.delete(postId);
    }

    @Override
    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public PostDto get(@PathVariable("id") Integer postId) {
        return postService.loadById(postId);
    }

    @Override
    @RequestMapping(path = "", method = RequestMethod.GET)
    public List<PostDto> getAll() {
        return postService.loadAll();
    }

    @Override
    @RequestMapping(path = "/filtered", method = RequestMethod.POST)
    public List<PostDto> getByFilter(@RequestBody FilterDto filter) {
        return postService.loadByFilter(filter);
    }

    @Override
    @RequestMapping(path = "/vote", method = RequestMethod.POST)
    public Integer vote(VoteDto vote) {
        return postService.vote(vote);
    }

    @Override
    @RequestMapping(path = "/accept/{id}", method = RequestMethod.POST)
    public boolean accept(Integer postId) {
        return postService.accept(postId);
    }

}
