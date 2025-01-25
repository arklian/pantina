package org.patinanetwork.discordbot;

import org.springframework.stereotype.Component;

@Component
public class PatChatDaemon {

    private final DiscordUserClient discordUserClient;

    public PatChatDaemon(DiscordUserClient discordUserClient) {
        this.discordUserClient = discordUserClient;
    }

    // This sends out a weekly messages to member patchat, telling them that they have been matched
    // with someone for a coffee chat
    //    @Scheduled(cron = "0 0 12 ? * Fri")
    public void sendWeeklyReminders() {
        System.out.println("Sending weekly reminders to active users to schedule coffee chats...");
        discordUserClient.broadcastPatChatMatching();
    }
}
