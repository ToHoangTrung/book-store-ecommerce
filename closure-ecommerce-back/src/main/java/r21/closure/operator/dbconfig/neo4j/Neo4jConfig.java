package r21.closure.operator.dbconfig.neo4j;

import org.neo4j.ogm.session.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
public class Neo4jConfig {

    @Autowired
    private Environment env;

    @Bean
    public org.neo4j.ogm.config.Configuration getConfiguration() {
        return new org.neo4j.ogm.config.Configuration.Builder()
                .credentials(env.getProperty("spring.data.neo4j.username"), env.getProperty("spring.data.neo4j.password"))
                .uri(env.getProperty("spring.data.neo4j.uri")).build();
    }

    @Bean
    public SessionFactory sessionFactory(org.neo4j.ogm.config.Configuration configuration) {
        return new SessionFactory(configuration,
                "r21.closure.operator.model.entity.neo4j");
    }
}
