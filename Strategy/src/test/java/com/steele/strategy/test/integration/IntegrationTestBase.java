package com.steele.strategy.test.integration;

import com.steele.strategy.Application;
import com.steele.strategy.config.TestConfig;
import org.fluentlenium.adapter.FluentTest;
import org.fluentlenium.core.wait.FluentWait;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;

import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

public class IntegrationTestBase extends FluentTest {
    private static ConfigurableApplicationContext context;

    protected IntegrationTestBase() {
        setSnapshotMode(Mode.TAKE_SNAPSHOT_ON_FAIL);
        setSnapshotPath("integration_failures");
    }

    @BeforeClass
    public static void start() throws Exception {
        if (context == null) {
            final Future<ConfigurableApplicationContext> future = Executors.newCachedThreadPool()
                .submit(
                        new Callable<ConfigurableApplicationContext>() {
                            @Override
                            public ConfigurableApplicationContext call() throws Exception {
                                return SpringApplication.run(Application.class, "--debug");
                            }
                        });
            context = future.get(60, TimeUnit.SECONDS);
        }
    }

    protected ApplicationContext getContext() {
        return context;
    }

    protected String getServerUrl() {
        return getBaseUrl("");
    }

    protected String getBaseUrl(final String path) {
        final Environment environment = getContext().getEnvironment();
        final String contextPath = environment.getProperty("server.contextPath", String.class, "");
        return "http://localhost:" + TestConfig.TEST_PROFILE_HTTP_PORT + contextPath + path;
    }

    protected FluentWait wait10() {
        return await().atMost(10000);
    }

    protected void waitForAngular() {
        executeScript("angular.element(document.querySelector('body')).removeClass('waitingForAngularReady'); angular.element(document.querySelector('html')).injector().get('$browser').notifyWhenNoOutstandingRequests(function() { angular.element(document.querySelector('body')).addClass('waitingForAngularReady'); })");
        wait10().until("body.waitingForAngularReady").isPresent();
    }

    @Override
    public WebDriver getDefaultDriver() {
        if (!System.getProperty("os.name").toLowerCase().contains("mac")) {
            return super.getDefaultDriver();
        } else {
            String useFirefoxSelenium = System.getenv("USE_FIREFOX_SELENIUM");
            if (useFirefoxSelenium != null) {
                return super.getDefaultDriver();
            } else {
                return new PhantomJSDriver();
            }
        }
    }

}
