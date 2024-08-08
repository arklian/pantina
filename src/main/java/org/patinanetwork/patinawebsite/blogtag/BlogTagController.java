package org.patinanetwork.patinawebsite.blogtag;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patinawebsite.blogtag.protos.*;
import org.patinanetwork.patinawebsite.blogtag.repo.BlogTagRepo;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class BlogTagController {

    BlogTagRepo blogTagRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public BlogTagController(BlogTagRepo blogTagRepo, JsonPrinter jsonPrinter, JsonParser jsonParser) {
        this.blogTagRepo = blogTagRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/blogtag/{blogtagId}")
    public String getBlogtag(@PathVariable("blogtagId") int blogtagId) {
        Blogtag blogtag = blogTagRepo.getBlogtagById(blogtagId);
        GetBlogTagResp resp = GetBlogTagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/blogtag/add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createBlogtag(@RequestBody String jsonRequest) {
        CreateBlogtagReq blogtagReq = jsonParser.parse(jsonRequest, CreateBlogtagReq.newBuilder());
        Blogtag blogtag = Blogtag.newBuilder()
                .setId(blogtagReq.getId())
                .setName(blogtagReq.getName())
                .build();

        blogTagRepo.addBlogtag(blogtag);
        CreateBlogtagResp resp = CreateBlogtagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @DeleteMapping(value = "/api/blogtag/delete/ {blogtagId}")
    public String deleteBlogtag(@PathVariable("blogtagId") int blogtagId) {
        Blogtag blogtag = blogTagRepo.deleteBlogtag(blogtagId);
        DeleteBlogtagResp resp = DeleteBlogtagResp.newBuilder().setBlogtag(blogtag).build();
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/blogtag")
    public String listBlogtags() {
        List<Blogtag> blogtags = blogTagRepo.listAllBlogtag();
        ListBlogtagResp resp = ListBlogtagResp.newBuilder().addAllBlogtags(blogtags).build();
        return jsonPrinter.print(resp);
    }

}
