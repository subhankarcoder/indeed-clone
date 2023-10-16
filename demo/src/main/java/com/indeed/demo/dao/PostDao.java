package com.indeed.demo.dao;

import com.indeed.demo.model.PostModal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostDao extends MongoRepository<PostModal, String> {
}
