package service;

import com.indeed.demo.dto.PostDTO;
import com.indeed.demo.model.PostModal;

import java.util.List;

public interface PostService {

    public List<PostModal> getAllPosts();

    public PostModal savePost(PostDTO post);
}
