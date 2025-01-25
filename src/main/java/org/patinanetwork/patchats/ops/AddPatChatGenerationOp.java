package org.patinanetwork.patchats.ops;

import org.patinanetwork.patchats.protos.AddPatChatGenerationReq;
import org.patinanetwork.patchats.protos.AddPatChatGenerationResp;
import org.patinanetwork.patchats.protos.PatChatGeneration;
import org.patinanetwork.patchats.repo.PatChatGenerationRepo;

public class AddPatChatGenerationOp {
    private final PatChatGenerationRepo patChatGenerationRepo;

    public AddPatChatGenerationOp(PatChatGenerationRepo patChatGenerationRepo) {
        this.patChatGenerationRepo = patChatGenerationRepo;
    }

    public AddPatChatGenerationResp run(AddPatChatGenerationReq addPatChatGenerationReq) {
        String timestamp = addPatChatGenerationReq.getGeneratedTimestamp();

        PatChatGeneration generation =
                PatChatGeneration.newBuilder().setGeneratedTimestamp(timestamp).build();

        PatChatGeneration savedGeneration = patChatGenerationRepo.addPatChatGeneration(generation);

        return AddPatChatGenerationResp.newBuilder()
                .setGeneration(savedGeneration)
                .build();
    }
}
