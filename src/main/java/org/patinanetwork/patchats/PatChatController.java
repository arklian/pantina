package org.patinanetwork.patchats;

import org.patinanetwork.common.protos.JsonParser;
import org.patinanetwork.common.protos.JsonPrinter;
import org.patinanetwork.patchats.ops.AddPatChatGenerationOp;
import org.patinanetwork.patchats.ops.AddPatChatMemberOp;
import org.patinanetwork.patchats.ops.DeletePatChatMemberOp;
import org.patinanetwork.patchats.ops.GetPatChatMemberOp;
import org.patinanetwork.patchats.ops.JoinPatChatMemberOp;
import org.patinanetwork.patchats.ops.LeavePatChatMemberOp;
import org.patinanetwork.patchats.ops.ListPatChatMembersOp;
import org.patinanetwork.patchats.ops.MatchPatChatMemberOp;
import org.patinanetwork.patchats.protos.AddPatChatGenerationReq;
import org.patinanetwork.patchats.protos.AddPatChatGenerationResp;
import org.patinanetwork.patchats.protos.AddPatChatMemberReq;
import org.patinanetwork.patchats.protos.AddPatChatMemberResp;
import org.patinanetwork.patchats.protos.DeletePatChatMemberReq;
import org.patinanetwork.patchats.protos.GetPatChatMemberReq;
import org.patinanetwork.patchats.protos.JoinPatChatMemberReq;
import org.patinanetwork.patchats.protos.JoinPatChatMemberResp;
import org.patinanetwork.patchats.protos.LeavePatChatMemberReq;
import org.patinanetwork.patchats.protos.LeavePatChatMemberResp;
import org.patinanetwork.patchats.protos.ListPatChatMembersReq;
import org.patinanetwork.patchats.protos.MatchPatChatMemberResp;
import org.patinanetwork.patchats.repo.PatChatGenerationRepo;
import org.patinanetwork.patchats.repo.PatChatRepo;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class PatChatController {

    PatChatRepo patChatRepo;
    PatChatGenerationRepo patChatGenerationRepo;
    JsonPrinter jsonPrinter;
    JsonParser jsonParser;

    public PatChatController(
            @Qualifier("PsqlPatChatRepo") PatChatRepo patChatRepo,
            PatChatGenerationRepo patChatGenerationRepo,
            JsonPrinter jsonPrinter,
            JsonParser jsonParser) {
        this.patChatRepo = patChatRepo;
        this.patChatGenerationRepo = patChatGenerationRepo;
        this.jsonPrinter = jsonPrinter;
        this.jsonParser = jsonParser;
    }

    @GetMapping(value = "/api/patchats/{memberId}")
    public String getPatChatMember(@PathVariable("memberId") int memberId) {
        var req = GetPatChatMemberReq.newBuilder().setId(memberId).build();
        GetPatChatMemberOp op = new GetPatChatMemberOp(patChatRepo);
        return jsonPrinter.print(op.run(req));
    }

    @GetMapping(value = "/api/patchats/members")
    public String listPatChatMembers() {
        var req = ListPatChatMembersReq.newBuilder().build();
        ListPatChatMembersOp op = new ListPatChatMembersOp(patChatRepo);
        return jsonPrinter.print(op.run());
    }

    @DeleteMapping(value = "/api/patchats/delete/{memberId}")
    public String deletePatChatMember(@PathVariable("memberId") int memberId) {
        var req = DeletePatChatMemberReq.newBuilder().setId(memberId).build();
        DeletePatChatMemberOp op = new DeletePatChatMemberOp(patChatRepo);
        return jsonPrinter.print(op.run(req));
    }

    @PostMapping(value = "/api/patchats/addmember", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addPatChatMember(@RequestBody String jsonRequest) {
        AddPatChatMemberReq req = jsonParser.parse(jsonRequest, AddPatChatMemberReq.newBuilder());
        AddPatChatMemberOp op = new AddPatChatMemberOp(patChatRepo);
        AddPatChatMemberResp resp = op.run(req);
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/patchats/leave/{memberId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String leavePatChatMember(@PathVariable("memberId") int memberId) {
        var req = LeavePatChatMemberReq.newBuilder().setId(memberId).build();
        LeavePatChatMemberOp op = new LeavePatChatMemberOp(patChatRepo);
        LeavePatChatMemberResp resp = op.run(req);
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/patchats/join/{memberId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String joinPatChatMember(@PathVariable("memberId") int memberId) {
        var req = JoinPatChatMemberReq.newBuilder().setId(memberId).build();
        JoinPatChatMemberOp op = new JoinPatChatMemberOp(patChatRepo);
        JoinPatChatMemberResp resp = op.run(req);
        return jsonPrinter.print(resp);
    }

    @GetMapping(value = "/api/patchats/match")
    public String matchPatChatMember() {
        MatchPatChatMemberOp op = new MatchPatChatMemberOp(patChatRepo);
        MatchPatChatMemberResp resp = op.run();
        return jsonPrinter.print(resp);
    }

    @PostMapping(value = "/api/patchats/addgeneration", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String addPatChatGeneration(@RequestBody AddPatChatGenerationReq req) {
        AddPatChatGenerationOp op = new AddPatChatGenerationOp(patChatGenerationRepo);
        AddPatChatGenerationResp resp = op.run(req);
        return jsonPrinter.print(resp);
    }
}
