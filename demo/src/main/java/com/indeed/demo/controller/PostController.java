package com.indeed.demo.controller;

import com.indeed.demo.constants.APIConstants;
import com.indeed.demo.dto.PostDTO;
import com.indeed.demo.model.PostModal;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import service.PostService;

import java.util.List;

@RestController
@CrossOrigin
@Slf4j
@RequiredArgsConstructor
public class PostController {


    final PostService postService = new PostService() {
        @Override
        public List<PostModal> getAllPosts() {
            return null;
        }

        @Override
        public PostModal savePost(PostDTO postDTO) {
            return null;
        }
    };

    @GetMapping("/posts")
    public List<PostModal> getAllPosts() {
        log.info("Getting all the posts #####");
        return this.postService.getAllPosts();
    }
    @PostMapping("/post")
    public PostModal savePost(@Valid @RequestBody PostDTO postDTORequest) {
        log.info("Saving post #####");
        return this.postService.savePost(postDTORequest);
    }

}
