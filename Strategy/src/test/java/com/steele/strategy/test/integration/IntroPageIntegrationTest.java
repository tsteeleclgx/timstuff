package com.steele.strategy.test.integration;

import org.junit.Test;

public class IntroPageIntegrationTest extends IntegrationTestBase {
    @Test
    public void canLogIn() throws Exception {
        goTo(getServerUrl());
        wait10().until("a").isPresent();
    }
}