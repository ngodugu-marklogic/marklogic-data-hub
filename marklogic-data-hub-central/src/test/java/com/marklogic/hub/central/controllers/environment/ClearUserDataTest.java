package com.marklogic.hub.central.controllers.environment;

import com.marklogic.hub.central.AbstractMvcTest;
import com.marklogic.hub.deploy.commands.LoadHubArtifactsCommand;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.access.AccessDeniedException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

public class ClearUserDataTest extends AbstractMvcTest {

    private final static String PATH = "/api/environment/clearUserData";

    @AfterEach
    void loadHubArtifactsInCaseAnythingWentWrongAndTheyreNoLongerThere() {
        new LoadHubArtifactsCommand(getHubConfig()).execute(null);
    }

    @Test
    void permittedUser() throws Exception {
        installReferenceModelProject();

        loginAsTestUserWithRoles("hub-central-clear-user-data");

        mockMvc.perform(get(PATH).session(mockHttpSession))
            .andDo(result -> {
                assertEquals(200, result.getResponse().getStatus());
            });
    }

    @Test
    void forbiddenUser() throws Exception {
        loginAsTestUserWithRoles("data-hub-developer");

        mockMvc.perform(get(PATH).session(mockHttpSession))
            .andDo(result -> {
                assertTrue(result.getResolvedException() instanceof AccessDeniedException);
            });
    }
}

