package org.patinanetwork.patinawebsite.blogtag.repo;

import org.patinanetwork.patinawebsite.blogtag.protos.Blogtag;

public interface BlogtagRepo {

    // Add a new blogtag
    Blogtag addBlogtag(Blogtag blogtag);

}
