package org.patinanetwork.patchats.repo;

import org.patinanetwork.patchats.protos.PatChatGeneration;
import java.util.List;

public interface PatChatGenerationRepo {
    // Inserts into the generation table
    public PatChatGeneration addPatChatGeneration(PatChatGeneration generation);
    // Returns a list of generations
    public List<PatChatGeneration> listPatChatGenerations();
}
