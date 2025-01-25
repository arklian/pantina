package org.patinanetwork.discordbot;

import net.dv8tion.jda.api.JDA;
import org.patinanetwork.discordbot.ops.AddDiscordUserOp;
import org.patinanetwork.discordbot.ops.BroadcastPatChatMatchingOp;
import org.patinanetwork.discordbot.ops.GetDiscordUserOp;
import org.patinanetwork.discordbot.ops.ListDiscordUserOp;
import org.patinanetwork.discordbot.protos.AddDiscordUserReq;
import org.patinanetwork.discordbot.protos.AddDiscordUserResp;
import org.patinanetwork.discordbot.protos.GetDiscordUserReq;
import org.patinanetwork.discordbot.protos.GetDiscordUserResp;
import org.patinanetwork.discordbot.protos.ListDiscordUsersResp;
import org.patinanetwork.discordbot.repo.DiscordUserRepo;
import org.patinanetwork.patchats.PatChatClient;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

/**
 * Controllers outside DiscordUser should interact with DiscordUser database through this client
 */
@Component
public class DiscordUserClient {
    DiscordUserRepo discordUserRepo;
    PatChatClient patChatClient;
    JDA jda;

    public DiscordUserClient(
            @Qualifier("PsqlDiscordUserRepo") DiscordUserRepo discordUserRepo, PatChatClient patChatClient, JDA jda) {
        this.discordUserRepo = discordUserRepo;
        this.patChatClient = patChatClient;
        this.jda = jda;
    }

    public GetDiscordUserResp getDiscordUser(GetDiscordUserReq req) {
        return new GetDiscordUserOp(discordUserRepo).run(req);
    }

    public ListDiscordUsersResp listDiscordUsers(ListDiscordUsersResp req) {
        return new ListDiscordUserOp(discordUserRepo).run();
    }

    public AddDiscordUserResp addDiscordUser(AddDiscordUserReq req) {
        return new AddDiscordUserOp(discordUserRepo).run(req);
    }

    public void broadcastPatChatMatching() {
        new BroadcastPatChatMatchingOp(discordUserRepo, patChatClient, jda).run();
    }
}
