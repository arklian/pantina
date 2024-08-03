import org.springframework.boot.gradle.tasks.bundling.BootBuildImage
plugins {
    java
    id("org.springframework.boot") version "3.3.1"
    id("io.spring.dependency-management") version "1.1.5"
    id("com.palantir.java-format") version "2.47.0"
    id("java")
    id("com.google.protobuf") version "0.9.4"
}

group = "org.patinanetwork"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(22)
    }
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:4.27.2"
    }

    generateProtoTasks {
        all().forEach { task ->
            task.builtins {
                java { }
            }

        }
    }
}

sourceSets.main {
    proto.srcDirs("src/main/java")
    java.srcDirs("build/generated/source/proto/main/grpc")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.google.protobuf:protobuf-java:4.27.2")
    implementation("com.google.protobuf:protobuf-java-util:4.27.2")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}



tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.named("bootRun") {
    group = "patina"
    dependsOn(":js:patina")
}

tasks.named("generateProto") {
    group = "patina"
}


tasks.named<BootBuildImage>("bootBuildImage") {
    imageName.set("registry.digitalocean.com/patina/patina-test")
    publish.set(true)
    docker {
        publishRegistry {
            username.set(System.getenv("PATINA_IMAGE_UPLOAD"))
            password.set(System.getenv("PATINA_IMAGE_UPLOAD"))
        }
    }
}

tasks.named<TaskReportTask>("tasks") {
    displayGroups = listOf("patina")
}
