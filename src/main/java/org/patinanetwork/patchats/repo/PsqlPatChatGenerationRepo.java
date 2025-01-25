package org.patinanetwork.patchats.repo;

import org.patinanetwork.common.db.DBConnection;
import org.patinanetwork.patchats.protos.PatChatGeneration;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Component(value = "PsqlPatChatGenerationRepo")
public class PsqlPatChatGenerationRepo implements PatChatGenerationRepo {
    DBConnection dbConnection;
    Connection conn;

    public PsqlPatChatGenerationRepo(DBConnection dbConnection) {
        this.dbConnection = dbConnection;
        this.conn = dbConnection.getConn();
    }

    @Override
    public PatChatGeneration addPatChatGeneration(PatChatGeneration generation) {
        String sql =
                "INSERT INTO patchat_generation (generated_timestamp) VALUES (?) RETURNING generation_id, generated_timestamp";

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            LocalDateTime parsedTimestamp = LocalDateTime.parse(generation.getGeneratedTimestamp());
            stmt.setObject(1, parsedTimestamp);

            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    int generationId = rs.getInt("generation_id");
                    String generatedTimestamp = rs.getTimestamp("generated_timestamp")
                            .toLocalDateTime()
                            .toString();
                    return PatChatGeneration.newBuilder()
                            .setId(generationId)
                            .setGeneratedTimestamp(generatedTimestamp)
                            .build();
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while adding patchat member", e);
        }

        return null;
    }

    @Override
    public List<PatChatGeneration> listPatChatGenerations() {
        String sql = "SELECT generation_id, generated_timestamp FROM patchat_generation";
        List<PatChatGeneration> generations = new ArrayList<>();

        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            try (ResultSet rs = stmt.executeQuery()) {
                while (rs.next()) {
                    int generationId = rs.getInt("generation_id");
                    java.sql.Timestamp sqlTimestamp = rs.getTimestamp("generated_timestamp");

                    // Convert the TIMESTAMP to a string (ISO-8601 format)
                    String generatedTimestamp = sqlTimestamp.toLocalDateTime().toString();

                    PatChatGeneration generation = PatChatGeneration.newBuilder()
                            .setId(generationId)
                            .setGeneratedTimestamp(generatedTimestamp)
                            .build();

                    generations.add(generation);
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error while retrieving all generations", e);
        }
        return generations;
    }
}
