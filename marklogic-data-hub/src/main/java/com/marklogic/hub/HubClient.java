/*
 * Copyright (c) 2020 MarkLogic Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.marklogic.hub;

import com.marklogic.client.DatabaseClient;
import org.springframework.web.client.RestTemplate;

public interface HubClient {

    /**
     * @return the name of the MarkLogic user associated with this client
     */
    String getUsername();

    DatabaseClient getStagingClient();

    DatabaseClient getFinalClient();

    DatabaseClient getJobsClient();

    String getDbName(DatabaseKind kind);

    /**
     * This is needed by the CollectorImpl class, which is not yet able to use a DatabaseClient.
     *
     * @return
     */
    RestTemplate getStagingRestTemplate();
}