package r21.closure.operator.dbconfig.neo4j;

import org.neo4j.ogm.config.Configuration.Builder;
import org.neo4j.ogm.session.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.data.neo4j.transaction.Neo4jTransactionManager;

@Configuration
public class Neo4jConfig {

    @Autowired
    private Environment env;

    @Bean
    public org.neo4j.ogm.config.Configuration getConfiguration() {
        return new Builder().uri(env.getProperty("spring.data.neo4j.uri")).build();
    }
//
//    @Bean
//    public SessionFactory getSessionFactory() {
//        return new SessionFactory(getConfiguration(), "r21.closure.operator.model.entity.neo4j");
//    }
//
//    @Bean
//    public Neo4jTransactionManager transactionManager() {
//        return new Neo4jTransactionManager(getSessionFactory());
//    }
}
